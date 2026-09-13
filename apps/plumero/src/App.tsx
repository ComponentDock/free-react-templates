import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { TrendingItems } from './components/TrendingItems'
import { ClientReviews } from './components/ClientReviews'
import { Features } from './components/Features'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Plumero — Pillow Store'
  }, [])

  return (
    <div className="min-h-screen text-page-text">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <TrendingItems />
        <ClientReviews />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
