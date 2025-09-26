import React, { useState } from 'react'

function isValidEmail(email?: string) {
  return !!email && /\S+@\S+\.\S+/.test(email)
}

export default function ContactForm({ companyId }: { companyId?: string }) {
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError(null)
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    const payload: Record<string, any> = {}
    fd.forEach((v, k) => (payload[k] = String(v)))

    // honeypot check (field named hp)
    if (payload.hp && payload.hp.length > 0) {
      // silently accept but don't send
      setStatus('Message sent — thank you!')
      form.reset()
      return
    }

    // basic client-side validation
    if (!payload.name || !payload.email || !payload.message) {
      setError('Please provide your name, email and a message.')
      return
    }
    if (!isValidEmail(payload.email)) {
      setError('Please provide a valid email address.')
      return
    }

    setStatus('Sending...')
    try {
      // If recaptcha is configured, attempt to get a token from grecaptcha
      if ((window as any).__RECAPTCHA_SITE_KEY) {
        const siteKey = (window as any).__RECAPTCHA_SITE_KEY
        try {
          // @ts-ignore
          const grecaptcha = (window as any).grecaptcha
          if (grecaptcha && grecaptcha.execute) {
            const token = await grecaptcha.execute(siteKey, { action: 'submit' })
            payload.recaptcha = token
          }
        } catch (err) {
          console.warn('reCAPTCHA token fetch failed', err)
        }
      }

      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyId, ...payload }),
      })
      if (res.ok) {
        setStatus('Message sent — thank you!')
        form.reset()
      } else {
        const text = await res.text()
        setError(text || 'Failed to send message.')
        setStatus(null)
      }
    } catch (err) {
      console.error(err)
      setError('Network/server error')
      setStatus(null)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
      <input name="name" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Your name" required />
      <input name="email" type="email" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Email" required />
      <input name="phone" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Phone (optional)" />
      <textarea name="message" className="p-3 rounded bg-slate-800 border border-slate-700" rows={4} placeholder="Message" required />

      {/* honeypot - hidden input to trap bots */}
      <input name="hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <button type="submit" className="bg-accent text-slate-900 px-6 py-3 rounded font-semibold">Send</button>
      {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
    </form>
  )
}
