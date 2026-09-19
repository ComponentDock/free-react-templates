import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { CategoryGrid } from './components/CategoryGrid'
import { ProductCarousel } from './components/ProductCarousel'
import { ExclusiveDeal } from './components/ExclusiveDeal'
import { BrandLogos } from './components/BrandLogos'
import { DealsOfTheWeek } from './components/DealsOfTheWeek'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mercato — Ecommerce Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CategoryGrid />
        <ProductCarousel />
        <ExclusiveDeal />
        <BrandLogos />
        <DealsOfTheWeek />
      </main>
      <Footer />
    </div>
  )
}
