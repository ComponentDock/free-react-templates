import { useEffect } from 'react'
import { Header } from './components/Header'
import { DiscountBanner } from './components/DiscountBanner'
import { HeroSlider } from './components/HeroSlider'
import { TopCategories } from './components/TopCategories'
import { NewArrivals } from './components/NewArrivals'
import { OfferSection } from './components/OfferSection'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vignette — Fashion E-commerce Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink transition-colors dark:bg-ink-dark dark:text-white">
      <Header />
      <main className="flex-1">
        <DiscountBanner />
        <HeroSlider />
        <TopCategories />
        <NewArrivals />
        <OfferSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
