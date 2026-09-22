import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroFeatures } from './components/IntroFeatures'
import { About } from './components/About'
import { Quote } from './components/Quote'
import { CTA } from './components/CTA'
import { Classes } from './components/Classes'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fitlane — Gym & Fitness Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroFeatures />
        <About />
        <Quote />
        <CTA />
        <Classes />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
