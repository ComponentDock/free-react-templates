import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureDestinations } from './components/FeatureDestinations'
import { TopDestinations } from './components/TopDestinations'
import { PromoCover } from './components/PromoCover'
import { FeaturedCarousel } from './components/FeaturedCarousel'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Placeboard — Travel Directory Template'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureDestinations />
      <TopDestinations />
      <PromoCover />
      <FeaturedCarousel />
      <Footer />
    </div>
  )
}
