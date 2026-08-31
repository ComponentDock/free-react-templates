import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Carousel } from './components/Carousel'
import { FeaturedGrid } from './components/FeaturedGrid'
import { SliderSection } from './components/SliderSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'CarouselHub — Carousel Gallery Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Carousel />
        <FeaturedGrid />
        <SliderSection />
      </main>
      <Footer />
    </div>
  )
}
