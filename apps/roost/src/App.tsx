import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FilterBand } from './components/FilterBand'
import { Services } from './components/Services'
import { Properties } from './components/Properties'
import { Agents } from './components/Agents'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Roost — Real Estate Website'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-slate">
      <Navbar />
      <main>
        <Hero />
        <FilterBand />
        <Services />
        <Properties />
        <Agents />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
