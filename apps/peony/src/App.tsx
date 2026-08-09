import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Booking } from './components/Booking'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Testimony } from './components/Testimony'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Peony — Beauty Salon Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-plum transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Booking />
        <Team />
        <Gallery />
        <Pricing />
        <Testimony />
      </main>
      <Footer />
    </div>
  )
}
