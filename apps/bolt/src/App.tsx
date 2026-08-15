import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { DiscountBand } from './components/DiscountBand'
import { Milestones } from './components/Milestones'
import { Trainers } from './components/Trainers'
import { BmiCalculator } from './components/BmiCalculator'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bolt — Fitness Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <DiscountBand />
        <Milestones />
        <Trainers />
        <BmiCalculator />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
