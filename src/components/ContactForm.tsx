import React, { useState } from 'react'

export default function ContactForm({ companyId }: { companyId?: string }) {
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    const payload: Record<string, any> = {}
    fd.forEach((v, k) => (payload[k] = v))
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: JSON.stringify({ companyId, ...payload }),
      })
      if (res.ok) setStatus('Message sent — thank you!')
      else setStatus('Failed to send message.')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('Server error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
      <input name="name" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Your name" required />
      <input name="email" type="email" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Email" required />
      <input name="phone" className="p-3 rounded bg-slate-800 border border-slate-700" placeholder="Phone (optional)" />
      <textarea name="message" className="p-3 rounded bg-slate-800 border border-slate-700" rows={4} placeholder="Message" required />
      <button type="submit" className="bg-accent text-slate-900 px-6 py-3 rounded font-semibold">Send</button>
      {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
    </form>
  )
}
