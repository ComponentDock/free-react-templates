import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AuctionGrid } from './components/AuctionGrid'
import { HowItWorks } from './components/HowItWorks'
import { AboutSplit } from './components/AboutSplit'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bidcraft — Auction Marketplace Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-smoke transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AuctionGrid />
        <HowItWorks />
        <AboutSplit />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
