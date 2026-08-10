import { useEffect } from 'react'
import { CategoryColumns } from './components/CategoryColumns'
import { FeaturedStrip } from './components/FeaturedStrip'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { PopularPosts } from './components/PopularPosts'
import { RetroLayout } from './components/RetroLayout'

export function App() {
  useEffect(() => {
    document.title = 'Trailhead — Hiking Blog'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <HeroSlider />
        <div className="pt-5">
          <FeaturedStrip />
        </div>
        <RetroLayout />
        <PopularPosts />
        <CategoryColumns />
      </main>
      <Footer />
    </div>
  )
}
