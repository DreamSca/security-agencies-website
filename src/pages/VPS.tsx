import React from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

export default function VPS() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4">VPS Agency</h1>
        <p className="text-gray-300 mb-8">Security staffing and integrated protection services for enterprises and events.</p>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-xl">Staffing & Training programs for permanent deployment.</div>
          <div className="p-6 bg-slate-800 rounded-xl">Event security and rapid response teams.</div>
        </section>
        <section className="mt-12 p-6 bg-slate-900 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Contact VPS Agency</h2>
          <ContactForm companyId="vps" />
        </section>
      </div>
    </main>
    </div>
  )
}
