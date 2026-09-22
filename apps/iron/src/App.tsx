import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Offer } from './components/Offer'
import { BmiCalculator } from './components/BmiCalculator'
import { TopCourses } from './components/TopCourses'
import { Features } from './components/Features'
import { Schedule } from './components/Schedule'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { BrandLogos } from './components/BrandLogos'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Iron — Fitness & Gym Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <Offer />
        <BmiCalculator />
        <TopCourses />
        <Features />
        <Schedule />
        <Team />
        <Pricing />
        <BrandLogos />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
