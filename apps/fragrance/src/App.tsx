import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductCarousel } from './components/ProductCarousel'
import { TrendingProducts } from './components/TrendingProducts'
import { OfferSection } from './components/OfferSection'
import { BestSellers } from './components/BestSellers'
import { BlogSection } from './components/BlogSection'
import { SubscribeSection } from './components/SubscribeSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fragrance — Fashion E-commerce Template'
  }, [])

  return (
    <div className="font-body text-body">
      <Navbar />
      <main>
        <Hero />
        <ProductCarousel />
        <TrendingProducts />
        <OfferSection />
        <BestSellers />
        <BlogSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  )
}
