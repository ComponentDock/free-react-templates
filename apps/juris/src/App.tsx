import { useEffect } from 'react'
import { About } from './components/About'
import { BrandStrip } from './components/BrandStrip'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { News } from './components/News'
import { PracticeAreas } from './components/PracticeAreas'
import { Testimonials } from './components/Testimonials'

export function App() {
  useEffect(() => {
    document.title = 'Juris — Law Firm Template'
  }, [])

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <BrandStrip />
      <Testimonials />
      <News />
      <CtaBand />
      <Footer />
    </main>
  )
}
