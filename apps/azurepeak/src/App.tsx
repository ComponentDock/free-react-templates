import { useEffect, useState, useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { Rooms } from './components/Rooms'
import { Amenities } from './components/Amenities'
import { Dining } from './components/Dining'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('azurepeak-dark') === 'true')

  useEffect(() => {
    document.title = 'AzurePeak — Luxury Hotel & Resort'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('azurepeak-dark', String(dark))
  }, [dark])

  const toggleDark = useCallback(() => setDark((d) => !d), [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <StatsBar />
        <Rooms />
        <Amenities />
        <Dining />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
