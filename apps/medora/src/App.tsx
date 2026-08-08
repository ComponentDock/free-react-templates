import { useEffect } from 'react'
import { UtilityBar } from './components/UtilityBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBar } from './components/FeatureBar'
import { Welcome } from './components/Welcome'
import { Departments } from './components/Departments'
import { Doctors } from './components/Doctors'
import { Facilities } from './components/Facilities'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Medora — Medical Clinic Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <UtilityBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureBar />
        <Welcome />
        <Departments />
        <Doctors />
        <Facilities />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
