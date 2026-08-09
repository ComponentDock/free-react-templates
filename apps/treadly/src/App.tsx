import { useEffect } from 'react'
import { PromoBar } from './components/PromoBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategoryGrid } from './components/CategoryGrid'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ServiceBar } from './components/ServiceBar'
import { NewArrivals } from './components/NewArrivals'
import { Testimonials } from './components/Testimonials'
import { AppCta } from './components/AppCta'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Treadly — Sneaker Store'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <PromoBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CategoryGrid />
        <FeaturedProducts />
        <ServiceBar />
        <NewArrivals />
        <Testimonials />
        <AppCta />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
