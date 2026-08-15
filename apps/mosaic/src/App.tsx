import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedWorks } from './components/FeaturedWorks'
import { Services } from './components/Services'
import { Newsletter } from './components/Newsletter'
import { Works } from './components/Works'
import { Testimonials } from './components/Testimonials'
import { CounterBand } from './components/CounterBand'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Mosaic — single-page digital agency landing: navbar → gradient hero →
   featured works + about split → services → newsletter band → works →
   testimonials → counter band → blog → cocoa footer. */
export function App() {
  useEffect(() => {
    document.title = 'Mosaic — Digital Agency'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorks />
        <Services />
        <Newsletter />
        <Works />
        <Testimonials />
        <CounterBand />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
