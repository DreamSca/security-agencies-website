const SENDGRID_KEY = process.env.SENDGRID_API_KEY
const DEST_EMAIL = process.env.DEST_EMAIL
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET

// Basic in-memory rate limiter per-IP (note: resets when function container restarts)
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_PER_WINDOW = 10
const ipCounters = {}

function rateLimit(ip) {
  const now = Date.now()
  if (!ipCounters[ip]) ipCounters[ip] = []
  // remove old timestamps
  ipCounters[ip] = ipCounters[ip].filter(ts => now - ts < RATE_LIMIT_WINDOW_MS)
  if (ipCounters[ip].length >= MAX_PER_WINDOW) return false
  ipCounters[ip].push(now)
  return true
}

function isValidEmail(email) {
  return typeof email === 'string' && /\S+@\S+\.\S+/.test(email)
}

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  try {
    const ip = event.headers['client-ip'] || event.headers['x-forwarded-for'] || 'unknown'
    if (!rateLimit(ip)) return { statusCode: 429, body: 'Too many requests' }

    const data = JSON.parse(event.body)
    // honeypot field (should be empty)
    if (data.hp && data.hp.length > 0) {
      console.log('Honeypot triggered, dropping submission')
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }

    // basic validation
    if (!data.name || !data.email || !data.message) {
      return { statusCode: 400, body: 'Missing required fields' }
    }
    if (!isValidEmail(data.email)) return { statusCode: 400, body: 'Invalid email' }

    // reCAPTCHA verification (optional)
    if (RECAPTCHA_SECRET) {
      const token = data.recaptcha
      if (!token) return { statusCode: 403, body: 'reCAPTCHA token missing' }
      // verify with Google
      const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(RECAPTCHA_SECRET)}&response=${encodeURIComponent(token)}`
      })
      const json = await verifyRes.json()
      // if low score or not successful, reject
      if (!json.success || (json.score !== undefined && json.score < 0.5)) {
        console.log('reCAPTCHA failed', json)
        return { statusCode: 403, body: 'reCAPTCHA verification failed' }
      }
    }

    console.log('Contact submission', data)

    if (SENDGRID_KEY && DEST_EMAIL) {
      const sg = require('@sendgrid/mail')
      sg.setApiKey(SENDGRID_KEY)
      const msg = {
        to: DEST_EMAIL,
        from: DEST_EMAIL,
        subject: `Contact: ${data.companyId || 'Website'}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || ''}\nMessage:\n${data.message}`,
      }
      await sg.send(msg)
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: 'Server error' }
  }
}
