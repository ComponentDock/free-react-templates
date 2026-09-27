import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FilterBar } from './components/FilterBar'
import { RecentProperties } from './components/RecentProperties'
import { Services } from './components/Services'
import { FeaturedListings } from './components/FeaturedListings'
import { LookingProperty } from './components/LookingProperty'
import { PopularPlaces } from './components/PopularPlaces'
import { Reviews } from './components/Reviews'
import { LatestNews } from './components/LatestNews'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-dark">
      <Header />
      <main>
        <Hero />
        <FilterBar />
        <RecentProperties />
        <Services />
        <FeaturedListings />
        <LookingProperty />
        <PopularPlaces />
        <Reviews />
        <LatestNews />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
