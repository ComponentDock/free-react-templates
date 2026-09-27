import { useEffect } from 'react'
import { UtilityBar } from './components/UtilityBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PropertyListings } from './components/PropertyListings'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Propwise — Real Estate Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <UtilityBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <PropertyListings />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
