import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Buzz — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Team />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
