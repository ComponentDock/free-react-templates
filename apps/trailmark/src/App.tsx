import { useEffect } from 'react'
import { AdventureSearch } from './components/AdventureSearch'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LastMinuteOffers } from './components/LastMinuteOffers'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { PopularDestinations } from './components/PopularDestinations'
import { SpecialOffers } from './components/SpecialOffers'
import { TopDestinations } from './components/TopDestinations'
import { VideoTeaser } from './components/VideoTeaser'

export function App() {
  useEffect(() => {
    document.title = 'Trailmark — Travel Template'
  }, [])

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <AdventureSearch />
        <TopDestinations />
        <LastMinuteOffers />
        <VideoTeaser />
        <PopularDestinations />
        <SpecialOffers />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
