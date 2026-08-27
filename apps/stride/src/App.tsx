import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HoursBar } from './components/HoursBar'
import { ServicesCarousel } from './components/ServicesCarousel'
import { ParallaxBand } from './components/ParallaxBand'
import { Classes } from './components/Classes'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { ServicesGrid } from './components/ServicesGrid'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stride — Fitness & Gym Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <HoursBar />
        <ServicesCarousel />
        <ParallaxBand headline="Get The Result You Want" seed="stride-pb1" />
        <Classes />
        <ParallaxBand headline="Every Step Counts" seed="stride-pb2" />
        <Schedule />
        <ParallaxBand headline="Your Fitness Partner Where Ever You Are" seed="stride-pb3" />
        <Trainers />
        <ServicesGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
