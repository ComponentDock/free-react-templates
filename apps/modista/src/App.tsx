import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { FeatureAds } from './components/FeatureAds'
import { LatestProducts } from './components/LatestProducts'
import { PromoBanners } from './components/PromoBanners'
import { CategoryListing } from './components/CategoryListing'
import { FeaturedProducts } from './components/FeaturedProducts'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Modista — Fashion E-Commerce Shop'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-primary">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <HeroSlider />
        <FeatureAds />
        <LatestProducts />
        <PromoBanners />
        <CategoryListing />
        <FeaturedProducts />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
