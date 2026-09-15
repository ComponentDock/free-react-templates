import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Products } from './components/Products'
import { Reviews } from './components/Reviews'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wristly — Smartwatch Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-700">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Products />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
