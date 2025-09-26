import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portal from './pages/Portal'
import Jamila from './pages/Jamila'
import MegaVPS from './pages/MegaVPS'
import VPS from './pages/VPS'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/jamila" element={<Jamila />} />
        <Route path="/megavps" element={<MegaVPS />} />
        <Route path="/vps" element={<VPS />} />
      </Routes>
    </BrowserRouter>
  )
}
