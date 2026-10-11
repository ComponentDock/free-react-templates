import { useEffect } from 'react'
import { FeaturedDestinations } from './components/FeaturedDestinations'
import { Footer } from './components/Footer'
import { FunFacts } from './components/FunFacts'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Newsletter } from './components/Newsletter'
import { PopularHotels } from './components/PopularHotels'
import { PopularRestaurants } from './components/PopularRestaurants'
import { Services } from './components/Services'
import { TipsArticles } from './components/TipsArticles'
import { TourPackages } from './components/TourPackages'
import { WhyChooseUs } from './components/WhyChooseUs'

export function App() {
  useEffect(() => {
    document.title = 'Tripforge — Travel Booking Template'
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <FeaturedDestinations />
        <TourPackages />
        <FunFacts />
        <PopularHotels />
        <WhyChooseUs />
        <PopularRestaurants />
        <TipsArticles />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
