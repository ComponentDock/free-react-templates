import { useState, useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeaturedProducts } from './components/FeaturedProducts'
import { SaleBanner } from './components/SaleBanner'
import { NewArrivals } from './components/NewArrivals'
import { Testimonials } from './components/Testimonials'
import { RecentBlog } from './components/RecentBlog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = useCallback(() => {
    setCartCount((c) => c + 1)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar cartCount={cartCount} />
      <HeroSlider />
      <FeaturedProducts />
      <SaleBanner />
      <NewArrivals onAddToCart={handleAddToCart} />
      <Testimonials />
      <RecentBlog />
      <Newsletter />
      <Footer />
    </div>
  )
}
