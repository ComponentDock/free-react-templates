import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FilterSearch } from './components/FilterSearch'
import { SpecialOffers } from './components/SpecialOffers'
import { Benefit } from './components/Benefit'
import { FeaturePlaces } from './components/FeaturePlaces'
import { Gallery } from './components/Gallery'
import { News } from './components/News'
import { Footer } from './components/Footer'

/* Skylark — single-page travel & flight booking landing: top info bar +
   navbar → hero → search filter → special offers → our benefit → feature
   places carousel → destination gallery → news latest → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Skylark — Travel & Flight Booking Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <div id="home-section" />
        <Hero />
        <FilterSearch />
        <SpecialOffers />
        <Benefit />
        <FeaturePlaces />
        <Gallery />
        <News />
      </main>
      <Footer />
    </div>
  )
}
