import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Team } from './components/Team'
import { Passion } from './components/Passion'
import { Apartments } from './components/Apartments'
import { Room } from './components/Room'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rentora — Real Estate'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Passion />
        <Apartments />
        <Room />
        <Testimonials />
        <CtaBand />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
