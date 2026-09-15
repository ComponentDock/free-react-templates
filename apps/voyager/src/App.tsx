import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Reservation } from './components/Reservation'
import { Services } from './components/Services'
import { PopularDestinations } from './components/PopularDestinations'
import { RecentBlog } from './components/RecentBlog'
import { PromoSale } from './components/PromoSale'
import { RecommendedHotels } from './components/RecommendedHotels'
import { Testimonials } from './components/Testimonials'
import { PopularCountries } from './components/PopularCountries'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Voyager — Travel Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors">
      <Navbar />
      <main>
        <HeroSlider />
        <Reservation />
        <Services />
        <PopularDestinations />
        <RecentBlog />
        <PromoSale />
        <RecommendedHotels />
        <Testimonials />
        <PopularCountries />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
