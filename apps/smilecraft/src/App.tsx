import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EmergencyStrip } from './components/EmergencyStrip'
import { AppointmentForm } from './components/AppointmentForm'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Achievements } from './components/Achievements'
import { Pricing } from './components/Pricing'
import { Newsletter } from './components/Newsletter'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Smilecraft — Modern Dental Clinic'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EmergencyStrip />
        <AppointmentForm />
        <Services />
        <About />
        <Team />
        <Achievements />
        <Pricing />
        <Newsletter />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
