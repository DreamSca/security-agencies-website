import React, { useRef, useEffect } from 'react'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
import megavpsLogo from '../img/megavps.png'

export default function MegaVPS() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">MegaVPS Hosting</h1>
            <p className="text-gray-300 mb-8">Enterprise-level hosting and VPS solutions for critical workloads.</p>
          </div>
          <div className="hidden md:block ml-6">
            <div ref={el => { /* placeholder for ref usage below */ }} />
            <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 p-3 animate-float shadow-lg" id="megavps-logo">
              <img src={megavpsLogo} alt="MegaVPS logo" className="w-full h-full object-contain" />
            </div>
            <div className="mt-2 text-sm text-gray-400">Enterprise hosting</div>
          </div>
        </div>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-xl">High-performance VPS with enterprise SLAs.</div>
          <div className="p-6 bg-slate-800 rounded-xl">Managed services and security-hardened instances.</div>
        </section>
        <section className="mt-12 p-6 bg-slate-900 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Contact MegaVPS</h2>
          <ContactForm companyId="megavps" />
        </section>
      </div>
    </main>
    </div>
  )
}

// GSAP subtle float animation hooked via ID (runs only if gsap is available)
try {
  const gsap = require('gsap')
  if (gsap && typeof window !== 'undefined') {
    setTimeout(() => {
      const el = document.getElementById('megavps-logo')
      if (el && gsap.to) {
        gsap.to(el, { y: -6, repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })
      }
    }, 500)
  }
} catch (err) {
  // optional - gsap not installed in some environments
}
