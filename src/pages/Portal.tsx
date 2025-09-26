import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const CompanyCard: React.FC<{ to: string; title: string; img?: string }> = ({ to, title, img }) => (
  <Link to={to} className="block p-6 bg-slate-800 rounded-xl shadow hover:scale-105 transform transition text-center">
    <div className="h-24 flex items-center justify-center mb-4">
      {img ? <img src={img} alt={title} className="h-20"/> : <div className="w-20 h-20 bg-slate-700 rounded-full" />}
    </div>
    <h3 className="text-xl font-bold">{title}</h3>
  </Link>
)

export default function Portal() {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-8">Our Companies</h1>
        <p className="text-gray-300 mb-8">Select a company to view its dedicated landing page</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CompanyCard to="/jamila" title="Jamila Security" img="/jcs-logo.svg" />
          <CompanyCard to="/megavps" title="MegaVPS" img="/megavps-logo.svg" />
          <CompanyCard to="/vps" title="VPS Agency" img="/vps-logo.svg" />
        </div>
      </div>
    </main>
    </div>
  )
}
