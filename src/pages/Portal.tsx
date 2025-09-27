import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import jamilaLogo from '../img/jamila.png'
import megavpsLogo from '../img/megavps.png'
import vpsLogo from '../img/vps.png'

const CompanyCard = React.forwardRef(function CompanyCard(props:any, ref:any) {
  const extra = props.extraClass || ''
  return (
    <Link to={props.to} ref={ref} className={`block p-8 card-portal rounded-2xl transform transition hover:scale-[1.03] text-center animate-enter ${extra}`}>
      <div className="flex items-center justify-center mb-6 p-4">
        {props.img ? <img src={props.img} alt={props.title} className="h-36 w-auto object-contain logo-tilt"/> : <div className="w-24 h-24 bg-slate-700 rounded-full" />}
      </div>
      <h3 className="text-2xl font-extrabold mb-1">{props.title}</h3>
      <p className="text-sm text-gray-300">Professional security & protection services</p>
    </Link>
  )
})

export default function Portal() {
  const refs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const els = refs.map(r => r.current).filter(Boolean)
    // IntersectionObserver to toggle visible class
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-enter-visible')
        }
      })
    }, { threshold: 0.15 })

    els.forEach(el => io.observe(el))

    // optional GSAP entrance for smoother effect if available
    try {
      import('gsap').then(mod => {
        const gsap = (mod && (mod as any).default) || (mod as any)
        if (gsap) {
          gsap.from(els, { y: 24, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out' })
        }
      })
    } catch (err) { /* ignore */ }

    return () => {
      els.forEach(el => io.unobserve(el))
      io.disconnect()
    }
  }, [])

  return (
    <div>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">Our Companies</h1>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">Choose a trusted partner. Click a logo to explore each company's dedicated page — designed for clarity and quick contact.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
          <CompanyCard ref={refs[0]} to="/jamila" title="Jamila Security" img={jamilaLogo} />
          <CompanyCard ref={refs[1]} extraClass="md:translate-y-1 md:shadow-2xl" to="/megavps" title="MegaVPS" img={megavpsLogo} />
          <CompanyCard ref={refs[2]} to="/vps" title="VPS Agency" img={vpsLogo} />
        </div>
      </div>
    </main>
    </div>
  )
}
