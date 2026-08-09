import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counters } from './components/Counters'
import { Team } from './components/Team'
import { VideoBand } from './components/VideoBand'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { AppointmentForm } from './components/AppointmentForm'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Razor — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counters />
        <Team />
        <VideoBand />
        <Gallery />
        <Pricing />
        <Testimonials />
        <AppointmentForm />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
