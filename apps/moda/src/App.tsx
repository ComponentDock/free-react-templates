import { useEffect } from 'react'
import { AnnouncementBar } from './components/AnnouncementBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Categories } from './components/Categories'
import { NewArrivals } from './components/NewArrivals'
import { SeasonSale } from './components/SeasonSale'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { CookieBanner } from './components/CookieBanner'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Moda — Fashion & Lifestyle'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <FeaturedProducts />
        <Categories />
        <NewArrivals />
        <SeasonSale />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  )
}
