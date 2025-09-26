import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
const jamilaLogo = new URL('../img/jamila.png', import.meta.url).href
const megavpsLogo = new URL('../img/megavps.png', import.meta.url).href
const vpsLogo = new URL('../img/vps.png', import.meta.url).href
const internshipImg = new URL('../img/internship.jpg', import.meta.url).href
const fireOlympicsImg = new URL('../img/fire olympics.jpg', import.meta.url).href
const securingNewYearImg = new URL('../img/securing new year.jpg', import.meta.url).href
const partnershipImg = new URL('../img/partnership.jpg', import.meta.url).href
const resortImg = new URL('../img/resort.jpg', import.meta.url).href
const multinationalImg = new URL('../img/multinational.jpg', import.meta.url).href
const institutionsImg = new URL('../img/institutions.jpg', import.meta.url).href
import ContactForm from '../components/ContactForm'
import news from '../data/news.json'

// helper to resolve images from filename
const imgMap: Record<string,string> = {
  'jamila.png': jamilaLogo,
  'megavps.png': megavpsLogo,
  'vps.png': vpsLogo,
  'internship.jpg': internshipImg,
  'fire olympics.jpg': fireOlympicsImg,
  'securing new year.jpg': securingNewYearImg,
  'partnership.jpg': partnershipImg,
  'resort.jpg': resortImg,
  'multinational.jpg': multinationalImg,
  'institutions.jpg': institutionsImg,
}

export default function Jamila() {
  const logoRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // inject simple Open Graph tags for Jamila
    const title = 'Jamila & Co. Security Services, Inc.'
    const desc = 'We firmly believe that the security service industry is an ever evolving need due to the fast changing times. Your Peace of Mind is our utmost Priority.'
    const ogs = [
      ['og:title', title],
      ['og:description', desc],
      ['twitter:card', 'summary_large_image'],
      ['twitter:title', title],
      ['twitter:description', desc],
    ]
    ogs.forEach(([name, content]) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        if (name.startsWith('og:')) (el as HTMLElement).setAttribute('property', name)
        else (el as HTMLElement).setAttribute('name', name)
        document.head.appendChild(el)
      }
      ;(el as HTMLMetaElement).content = String(content)
    })

    // GSAP float for logo
    try {
      // dynamic import to avoid build-time requirement
      import('gsap').then(mod => {
        const gsap = (mod && (mod as any).default) || (mod as any)
        if (logoRef.current && gsap && typeof gsap.to === 'function') {
          gsap.to(logoRef.current, { y: -8, repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })
        }
      })
    } catch (err) { /* ignore */ }

    // Lottie accent (optional)
    try {
      import('lottie-web').then(mod => {
        const lottie = (mod && (mod as any).default) || (mod as any)
        const mount = document.getElementById('lottie-accent')
        if (mount && lottie && typeof lottie.loadAnimation === 'function') {
          lottie.loadAnimation({ container: mount, renderer: 'svg', loop: true, autoplay: true, animationData: undefined })
          // Note: replace animationData with a JSON payload or provide a URL if you add a file.
        }
      })
    } catch (err) { /* ignore */ }
  }, [])
  return (
    <div>
      <Header />
      <main className="bg-gradient-to-b from-slate-900 to-slate-800 text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Jamila & Co. Security Services, Inc.</h1>
            <p className="mx-auto max-w-3xl text-gray-300">We firmly believe that the security service industry is an ever evolving need due to the fast changing times. We take it by heart because we know that in every property, business or person that is entrusted to us was brought about by the many years or persistence, passion and determination. Your Peace of Mind is our utmost Priority at all times.</p>
          </div>

          {/* Video section */}
          <div className="mb-12">
            <div className="w-full">
              <div className="w-full h-64 md:h-[560px] rounded overflow-hidden shadow-lg">
                <iframe src="https://www.youtube.com/embed/8N2szHHAE-Y" title="The Jamila Legacy : Your Peace of Mind" className="w-full h-full block" frameBorder="0" allowFullScreen />
              </div>
            </div>
          </div>

          {/* News grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {news.map((n:any, i:number) => (
              <article key={i} className="bg-white text-slate-900 rounded overflow-hidden shadow-md">
                <img src={imgMap[n.image] || jamilaLogo} alt={n.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold">{n.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {/* Content sections */}
          <section className="grid md:grid-cols-2 gap-8 items-center py-12 border-t border-slate-700">
            <div>
              <h2 className="text-2xl font-semibold mb-3">World Class Private Resorts and Villas. LEGACY.</h2>
              <p className="text-gray-300">Trusted by both Non-governmental agencies and multinational companies through the decades of untarnished record in security service provision.</p>
            </div>
            <div>
              <img src={resortImg} alt="Private resort" className="w-full rounded shadow-md object-cover" />
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center py-12 border-t border-slate-700">
            <div className="order-2 md:order-1">
              <img src={multinationalImg} alt="multinational agencies" className="w-full rounded shadow-md object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-3">Multinational Agencies and Organizations. INTEGRITY.</h2>
              <p className="text-gray-300">Reliable partner with world-class private and public resorts and islands all over the country.</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center py-12 border-t border-slate-700">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Commercial and Financial Institutions and Establishments. SECURITY.</h2>
              <p className="text-gray-300">Securing millions of Filipinos every day as they spend quality time in commercial and business areas.</p>
            </div>
            <div>
              <img src={institutionsImg} alt="commercial institutions" className="w-full rounded shadow-md object-cover" />
            </div>
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
