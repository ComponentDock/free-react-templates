import { useEffect } from 'react'
import { TopHeader } from './components/TopHeader'
import { Navbar } from './components/Navbar'
import { HeroCarousel } from './components/HeroCarousel'
import { TopCategories } from './components/TopCategories'
import { BestRecipes } from './components/BestRecipes'
import { CtaBanner } from './components/CtaBanner'
import { SmallRecipes } from './components/SmallRecipes'
import { QuoteNewsletterAd } from './components/QuoteNewsletterAd'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Palatable — Food & Recipe Blog Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <TopHeader />
      <Navbar />
      <main className="flex-1">
        <HeroCarousel />
        <TopCategories />
        <BestRecipes />
        <CtaBanner />
        <SmallRecipes />
        <QuoteNewsletterAd />
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  )
}
