import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-[rgba(3,7,18,0.35)] backdrop-blur sticky top-0 z-40 border-b border-white/3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-white">Security Portal</Link>
        <nav>
          <Link to="/" className="text-gray-300 hover:text-white transition">Portal</Link>
        </nav>
      </div>
    </header>
  )
}
