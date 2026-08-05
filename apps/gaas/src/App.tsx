import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { FeatureTiles } from './components/FeatureTiles'
import { Splits } from './components/Splits'
import { FeaturesSpecs } from './components/FeaturesSpecs'
import { Pricing } from './components/Pricing'
import { Brands } from './components/Brands'
import { Impress } from './components/Impress'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gaas — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <FeatureTiles />
        <Splits />
        <FeaturesSpecs />
        <Pricing />
        <Brands />
        <Impress />
      </main>
      <Footer />
    </div>
  )
}
