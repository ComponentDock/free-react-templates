import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureCards } from './components/FeatureCards'
import { AboutSplit } from './components/AboutSplit'
import { Gallery } from './components/Gallery'
import { StatsBand } from './components/StatsBand'
import { Testimonials } from './components/Testimonials'
import { HowItWorks } from './components/HowItWorks'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Sofalist — single-page furniture store landing: navbar → hero → feature
   cards → about split → gallery → stats → testimonials → how it works →
   blog → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Sofalist — Furniture Store Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <AboutSplit />
        <Gallery />
        <StatsBand />
        <Testimonials />
        <HowItWorks />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
