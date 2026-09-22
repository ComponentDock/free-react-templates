import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBlocks } from './components/FeatureBlocks'
import { About } from './components/About'
import { FeaturedClasses } from './components/FeaturedClasses'
import { Schedule } from './components/Schedule'
import { Testimonials } from './components/Testimonials'
import { Trainers } from './components/Trainers'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Peakform — Gym & Fitness'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureBlocks />
        <About />
        <FeaturedClasses />
        <Schedule />
        <Testimonials />
        <Trainers />
      </main>
      <Footer />
    </div>
  )
}
