exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }
  try {
    const data = JSON.parse(event.body)
    // In a real app you'd validate and send an email or store the submission.
    console.log('Contact submission', data)
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true })
    }
  } catch (err) {
    console.error(err)
    return { statusCode: 500, body: 'Server error' }
  }
}
