import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { FeaturedProducts } from './components/FeaturedProducts'
import { OfferBanner } from './components/OfferBanner'
import { NewProducts } from './components/NewProducts'
import { BlogSection } from './components/BlogSection'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cartly — Ecommerce Landing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-700">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <OfferBanner />
        <NewProducts />
        <BlogSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
