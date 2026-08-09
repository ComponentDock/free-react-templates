import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Booking } from './components/Booking'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mane — Hair Salon Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Booking />
        <Team />
        <Gallery />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
