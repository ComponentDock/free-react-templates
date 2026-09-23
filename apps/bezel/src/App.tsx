import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { VideoIntro } from './components/VideoIntro'
import { FeatureGrid } from './components/FeatureGrid'
import { AboutSplit } from './components/AboutSplit'
import { Services } from './components/Services'
import { ProductCatalog } from './components/ProductCatalog'
import { Reviews } from './components/Reviews'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bezel — Smartwatch Landing'
  }, [])

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <VideoIntro />
        <FeatureGrid />
        <AboutSplit />
        <Services />
        <ProductCatalog />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
