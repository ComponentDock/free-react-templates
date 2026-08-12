import { useEffect, useState } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Services } from './components/Services'
import { Welcome } from './components/Welcome'
import { Departments } from './components/Departments'
import { Testimonials } from './components/Testimonials'
import { BusinessTabs } from './components/BusinessTabs'
import { ExpertDoctors } from './components/ExpertDoctors'
import { EmergencyBand } from './components/EmergencyBand'
import { Footer } from './components/Footer'
import { AppointmentModal } from './components/AppointmentModal'

export function App() {
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const openAppointment = () => setAppointmentOpen(true)
  const closeAppointment = () => setAppointmentOpen(false)

  useEffect(() => {
    document.title = 'Salus — Medical & Hospital Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <TopBar />
      <Navbar onOpenAppointment={openAppointment} />
      <main className="flex-1">
        <HeroSlider />
        <Services onOpenAppointment={openAppointment} />
        <Welcome />
        <Departments />
        <Testimonials />
        <BusinessTabs />
        <ExpertDoctors />
        <EmergencyBand onOpenAppointment={openAppointment} />
      </main>
      <Footer />
      <AppointmentModal open={appointmentOpen} onClose={closeAppointment} />
    </div>
  )
}
