import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryStrip } from './components/CategoryStrip'
import { FeaturedAds } from './components/FeaturedAds'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Adnest — Classified Ads Directory'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg text-nav-text transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryStrip />
        <FeaturedAds />
      </main>
      <Footer />
    </div>
  )
}
