import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedAds } from './components/FeaturedAds'
import { PopularCategories } from './components/PopularCategories'
import { TrendingToday } from './components/TrendingToday'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Catalog — Directory & Listing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedAds />
        <PopularCategories />
        <TrendingToday />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
