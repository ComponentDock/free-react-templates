import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroRow } from './components/HeroRow'
import { HeroBanner } from './components/HeroBanner'
import { Categories } from './components/Categories'
import { FeaturedProducts } from './components/FeaturedProducts'
import { BannerBand } from './components/BannerBand'
import { LatestProducts } from './components/LatestProducts'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

/** Grocerly — one-page fresh grocery storefront.
 *  Section order matches the live preview DOM 1:1: two-row header (top bar +
 *  mid row) → hero row (departments / search / phone) → photo banner →
 *  categories strip → featured products (filter tabs) → banner band →
 *  latest/top-rated/review columns → from the blog → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Grocerly — Fresh Grocery Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Header />
      <main>
        <HeroRow />
        <HeroBanner />
        <Categories />
        <FeaturedProducts />
        <BannerBand />
        <LatestProducts />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
