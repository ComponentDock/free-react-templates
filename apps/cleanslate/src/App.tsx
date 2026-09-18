import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppointmentForm } from './components/AppointmentForm'
import { Welcome } from './components/Welcome'
import { StatsCounter } from './components/StatsCounter'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { ParallaxCTA } from './components/ParallaxCTA'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'CleanSlate — Cleaning Services Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-brand-heading font-sans">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AppointmentForm />
        <Welcome />
        <StatsCounter />
        <Services />
        <Team />
        <Testimonials />
        <Blog />
        <ParallaxCTA />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
