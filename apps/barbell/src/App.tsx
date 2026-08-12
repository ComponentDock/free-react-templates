import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Booking } from './components/Booking'
import { Services } from './components/Services'
import { Quote } from './components/Quote'
import { Lifestyle } from './components/Lifestyle'
import { Boxes } from './components/Boxes'
import { CallToAction } from './components/CallToAction'
import { MapSection } from './components/MapSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Barbell — Gym & CrossFit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Booking />
        <Services />
        <Quote />
        <Lifestyle />
        <Boxes />
        <CallToAction />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
