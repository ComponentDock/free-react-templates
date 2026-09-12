import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { GymClasses } from './components/GymClasses'
import { Pricing } from './components/Pricing'
import { Testimonies } from './components/Testimonies'
import { Appointment } from './components/Appointment'
import { Blog } from './components/Blog'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vigor — Crossfit Gym Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <GymClasses />
        <Pricing />
        <Testimonies />
        <Appointment />
        <Blog />
        <Counter />
      </main>
      <Footer />
    </div>
  )
}
