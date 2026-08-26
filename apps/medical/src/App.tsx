import { useEffect } from 'react'
import { UtilityBar } from './components/UtilityBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicingHours } from './components/ServicingHours'
import { Appointment } from './components/Appointment'
import { Facilities } from './components/Facilities'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Medical — Healthcare Clinic Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <UtilityBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicingHours />
        <Appointment />
        <Facilities />
        <Services />
        <Team />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
