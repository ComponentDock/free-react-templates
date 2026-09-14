import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeaturedProducts'
import { NewArrivals } from './components/NewArrivals'
import { Promo } from './components/Promo'
import { OurProducts } from './components/OurProducts'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bazaar — Fashion E-Commerce Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <NewArrivals />
        <Promo />
        <OurProducts />
        <Testimonials />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
