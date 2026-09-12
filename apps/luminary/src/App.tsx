import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Concept } from './components/Concept'
import { Testimonials } from './components/Testimonials'
import { FeatureCta } from './components/FeatureCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Luminary — Inspiration & Creative Agency'
  }, [])

  return (
    <div className="min-h-screen bg-white text-body-text transition-colors">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Concept />
        <Testimonials />
        <FeatureCta />
      </main>
      <Footer />
    </div>
  )
}
