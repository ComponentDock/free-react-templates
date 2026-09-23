import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { FeaturedAds } from './components/FeaturedAds'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ClassiPost — Classified Ads Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedAds />
      </main>
      <Footer />
    </div>
  )
}
