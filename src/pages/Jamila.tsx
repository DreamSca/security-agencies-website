import React from 'react'
import Header from '../components/Header'
import jamilaLogo from '../img/jamila.png'
import ContactForm from '../components/ContactForm'

export default function Jamila() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">Jamila Security</h1>
            <p className="text-gray-300 mb-8">Jamila provides executive protection and corporate security solutions tailored for high-profile clients.</p>
          </div>
          <div className="hidden md:block ml-6">
            <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 p-3 animate-float shadow-lg">
              <img src={jamilaLogo} alt="Jamila logo" className="w-full h-full object-contain" />
            </div>
            <div className="mt-2 text-sm text-gray-400">Trusted partner</div>
          </div>
        </div>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-xl">Mission: Ensure safety and operational continuity.</div>
          <div className="p-6 bg-slate-800 rounded-xl">Services: Executive Protection, Mobile Patrols, Risk Assessments.</div>
        </section>
        <section className="mt-12 p-6 bg-slate-900 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Contact Jamila</h2>
          <ContactForm companyId="jamila" />
        </section>
      </div>
    </main>
    </div>
  )
}
