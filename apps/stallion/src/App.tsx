import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TopCourses } from './components/TopCourses'
import { CtaBanner } from './components/CtaBanner'
import { Features } from './components/Features'
import { BmiCalculator } from './components/BmiCalculator'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Brands } from './components/Brands'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stallion — Gym & Fitness Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TopCourses />
        <CtaBanner />
        <Features />
        <BmiCalculator />
        <Gallery />
        <Testimonials />
        <Brands />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
