import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Extends } from './components/Extends'
import { Offer } from './components/Offer'
import { Testimonials } from './components/Testimonials'
import { Calculate } from './components/Calculate'
import { Team } from './components/Team'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gains — Fitness Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Extends />
        <Offer />
        <Testimonials />
        <Calculate />
        <Team />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}
