import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { AppointmentPanel } from './components/AppointmentPanel'

export function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  useEffect(() => {
    document.title = 'Lustre — Hair Salon Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar onBookAppointment={() => setAppointmentOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <AppointmentPanel open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  )
}
