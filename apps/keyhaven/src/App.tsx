import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { FeaturedProperties } from './components/FeaturedProperties'
import { WhyChoose } from './components/WhyChoose'
import { Agents } from './components/Agents'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keyhaven — Real Estate Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsStrip />
        <FeaturedProperties />
        <WhyChoose />
        <Agents />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
