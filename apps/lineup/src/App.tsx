import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedEvents } from './components/FeaturedEvents'
import { NextEvents } from './components/NextEvents'
import { RegionalEvents } from './components/RegionalEvents'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lineup — Event Calendar & Concert Listings'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[var(--color-body)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedEvents />
        <NextEvents />
        <RegionalEvents />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
