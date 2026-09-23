import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PracticeAreas } from './components/PracticeAreas'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { LegalSolutions } from './components/LegalSolutions'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Oathmark — Notary Public & Legal Solutions'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Testimonials />
        <LegalSolutions />
      </main>
      <Footer />
    </div>
  )
}
