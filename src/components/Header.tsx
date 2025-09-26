import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-slate-900/50 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">Security Portal</Link>
        <nav>
          <Link to="/" className="text-gray-300 hover:underline">Portal</Link>
        </nav>
      </div>
    </header>
  )
}
