import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Recipes } from './components/Recipes'
import { RecipeVideos } from './components/RecipeVideos'
import { Dishes } from './components/Dishes'
import { LatestTrending } from './components/LatestTrending'
import { CustomerFeedback } from './components/CustomerFeedback'
import { DownloadApp } from './components/DownloadApp'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Zestly — Cooking & Recipe Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Recipes />
        <RecipeVideos />
        <Dishes />
        <LatestTrending />
        <CustomerFeedback />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  )
}
