import React from 'react'
import Header from '../components/Header'

export default function MegaVPS() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold mb-4">MegaVPS Hosting</h1>
        <p className="text-gray-300 mb-8">Enterprise-level hosting and VPS solutions for critical workloads.</p>
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-800 rounded-xl">High-performance VPS with enterprise SLAs.</div>
          <div className="p-6 bg-slate-800 rounded-xl">Managed services and security-hardened instances.</div>
        </section>
      </div>
    </main>
    </div>
  )
}
