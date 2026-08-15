import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { IntroProducts } from './components/IntroProducts'
import { FeaturedPromos } from './components/FeaturedPromos'
import { ProductGrid } from './components/ProductGrid'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — 2018 Summer Collection`
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <HeroSlider />
        <IntroProducts />
        <FeaturedPromos />
        <ProductGrid />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
