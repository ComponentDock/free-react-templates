import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBanners } from './components/FeatureBanners'
import { PopularProducts } from './components/PopularProducts'
import { NewProducts } from './components/NewProducts'
import { Testimonials } from './components/Testimonials'
import { CtaBanners } from './components/CtaBanners'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Elixir — Pharmacy & Supplement Store Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureBanners />
        <PopularProducts />
        <NewProducts />
        <Testimonials />
        <CtaBanners />
      </main>
      <Footer />
    </div>
  )
}
