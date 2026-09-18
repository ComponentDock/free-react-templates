import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesIntro } from './components/ServicesIntro'
import { EquipmentStrip } from './components/EquipmentStrip'
import { AppointmentForm } from './components/AppointmentForm'
import { ServicesGrid } from './components/ServicesGrid'
import { SuccessStories } from './components/SuccessStories'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Brightoral — Dental Clinic Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesIntro />
        <EquipmentStrip />
        <AppointmentForm />
        <ServicesGrid />
        <SuccessStories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
