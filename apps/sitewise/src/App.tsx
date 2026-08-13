import { useEffect } from 'react'
import { CallToAction } from './components/CallToAction'
import { CoreFeatures } from './components/CoreFeatures'
import { DataCentres } from './components/DataCentres'
import { DedicatedSupport } from './components/DedicatedSupport'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LatestNews } from './components/LatestNews'
import { Pricing } from './components/Pricing'

export function App() {
  useEffect(() => {
    document.title = 'Sitewise — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-primary-950 antialiased">
      <Header />
      <main>
        <Hero />
        <Pricing />
        <CoreFeatures />
        <DedicatedSupport />
        <DataCentres />
        <Faq />
        <LatestNews />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
