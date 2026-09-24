import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureStrip } from './components/FeatureStrip'
import { About } from './components/About'
import { Services } from './components/Services'
import { Departments } from './components/Departments'
import { Doctors } from './components/Doctors'
import { AppointmentForm } from './components/AppointmentForm'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Medpact — Hospital & Clinics Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main id="main" className="flex-1">
        <Hero />
        <FeatureStrip />
        <About />
        <Services />
        <Departments />
        <Doctors />
        <AppointmentForm />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
