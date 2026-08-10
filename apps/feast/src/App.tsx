import { useEffect } from 'react'
import { AdBanner } from './components/AdBanner'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { RecipeGrid } from './components/RecipeGrid'
import { Reviews } from './components/Reviews'
import { Widgets } from './components/Widgets'

export function App() {
  useEffect(() => {
    document.title = 'Feast — Recipes & More'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink dark:bg-gray-950 dark:text-gray-200">
      <Header />
      <main>
        <HeroSlider />
        <AdBanner />
        <RecipeGrid />
        <Widgets />
        <Reviews />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
