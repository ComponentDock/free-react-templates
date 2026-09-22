import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { ServicingHours } from './components/ServicingHours'
import { AppointmentForm } from './components/AppointmentForm'
import { Doctors } from './components/Doctors'
import { Departments } from './components/Departments'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'MedLink — Medical & Healthcare'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <HeroBanner />
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 lg:grid-cols-2">
            <ServicingHours />
            <AppointmentForm />
          </div>
        </section>
        <Doctors />
        <Departments />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
