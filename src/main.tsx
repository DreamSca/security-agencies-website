import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tailwind.css'
import { useEffect } from 'react'
import { initReveal } from './lib/reveal'

function ClientApp() {
  useEffect(() => {
    initReveal()
  }, [])
  return <App />
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientApp />
  </React.StrictMode>
)
