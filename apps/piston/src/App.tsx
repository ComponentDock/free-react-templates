import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoBar } from './components/InfoBar'
import { About } from './components/About'
import { Services } from './components/Services'
import { Programs } from './components/Programs'
import { StatsCounter } from './components/StatsCounter'
import { Coaches } from './components/Coaches'
import { Testimonials } from './components/Testimonials'
import { Packages } from './components/Packages'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { AppointmentForm } from './components/AppointmentForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Piston — Gym & Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InfoBar />
        <About />
        <Services />
        <Programs />
        <StatsCounter />
        <Coaches />
        <Testimonials />
        <Packages />
        <Blog />
        <Gallery />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  )
}
