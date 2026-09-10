import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Promo } from './components/Promo'
import { CarListings } from './components/CarListings'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'DriveGo — Car Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Promo />
        <CarListings />
        <Features />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
