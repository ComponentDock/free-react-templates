import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PropertyInformation } from './components/PropertyInformation'
import { BrowseApartments } from './components/BrowseApartments'
import { FeaturedApartments } from './components/FeaturedApartments'
import { Testimonials } from './components/Testimonials'
import { News } from './components/News'
import { SocialStrip } from './components/SocialStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Quarters — Apartment & Real Estate Template'
  }, [])

  return (
    <div className="font-sans">
      {/* Transparent navbar floats over the hero (absolute, top 1rem). */}
      <Navbar />
      <main>
        <Hero />
        <PropertyInformation />
        <BrowseApartments />
        <FeaturedApartments />
        <Testimonials />
        <News />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  )
}
