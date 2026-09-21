import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Programs } from './components/Programs'
import { StatsCounter } from './components/StatsCounter'
import { Coaches } from './components/Coaches'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { ContactForm } from './components/ContactForm'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'IronPulse — Crossfit & Fitness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Pricing />
        <Programs />
        <StatsCounter />
        <Coaches />
        <Testimonials />
        <Blog />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
