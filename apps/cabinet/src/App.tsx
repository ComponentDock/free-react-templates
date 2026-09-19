import { useEffect } from 'react'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularProducts } from './components/PopularProducts'
import { AboutSection } from './components/AboutSection'
import { RecommendedProducts } from './components/RecommendedProducts'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cabinet — Furniture Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularProducts />
        <AboutSection />
        <RecommendedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
