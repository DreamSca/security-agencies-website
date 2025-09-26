const SENDGRID_KEY = process.env.SENDGRID_API_KEY
const DEST_EMAIL = process.env.DEST_EMAIL

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  try {
    const data = JSON.parse(event.body)
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
