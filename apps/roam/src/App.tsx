import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryCarousel } from './components/CategoryCarousel'
import { LatestPosts } from './components/LatestPosts'
import { PlacesGrid } from './components/PlacesGrid'
import { PopularPosts } from './components/PopularPosts'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Roam — Travel Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <CategoryCarousel />
        <LatestPosts />
        <PlacesGrid />
        <PopularPosts />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
