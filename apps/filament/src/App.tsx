import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { CoreFeatureCarousel } from './components/CoreFeatureCarousel'
import { CoreFeatureImage } from './components/CoreFeatureImage'
import { ProcessSteps } from './components/ProcessSteps'
import { ServiceCarousel } from './components/ServiceCarousel'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Filament — Feminine Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CoreFeatureCarousel />
        <CoreFeatureImage />
        <ProcessSteps />
        <ServiceCarousel />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
