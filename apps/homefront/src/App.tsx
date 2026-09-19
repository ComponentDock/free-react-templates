import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PropertySearch } from './components/PropertySearch'
import { Services } from './components/Services'
import { FeaturedProperties } from './components/FeaturedProperties'
import { Testimonials } from './components/Testimonials'
import { Stats } from './components/Stats'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Homefront — Real Estate Template'
  }, [])

  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <PropertySearch />
        <Services />
        <FeaturedProperties />
        <Testimonials />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
