import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { ChooseUs } from './components/ChooseUs'
import { Classes } from './components/Classes'
import { Gallery } from './components/Gallery'
import { Instructors } from './components/Instructors'
import { Appointment } from './components/Appointment'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fitnest — Yoga & Fitness Studio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ChooseUs />
        <Classes />
        <Gallery />
        <Instructors />
        <Appointment />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
