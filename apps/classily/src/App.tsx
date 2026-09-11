import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryStats } from './components/CategoryStats'
import { FeaturedAds } from './components/FeaturedAds'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Classily — Classified Ads Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryStats />
        <FeaturedAds />
      </main>
      <Footer />
    </div>
  )
}
