import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Classes } from './components/Classes'
import { Trainers } from './components/Trainers'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Pricing } from './components/Pricing'
import { Signup } from './components/Signup'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Aurae — Yoga & Wellness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Classes />
        <Trainers />
        <Testimonials />
        <Events />
        <Pricing />
        <Signup />
      </main>
      <Footer />
    </div>
  )
}
