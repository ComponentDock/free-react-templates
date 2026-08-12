import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Welcome } from './components/Welcome'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Venue } from './components/Venue'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rally — International Digital Business Event'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Countdown />
        <Welcome />
        <Speakers />
        <Schedule />
        <Venue />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
