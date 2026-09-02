import { useEffect } from 'react'
import { SplitCarousel } from './components/SplitCarousel'
import { FeaturesSection } from './components/FeaturesSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Carousel Glide — Split Design Carousel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-dark">
      <main className="flex-1">
        <SplitCarousel />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
