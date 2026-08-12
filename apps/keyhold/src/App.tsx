import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { FeaturedProperties } from './components/FeaturedProperties'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Counter } from './components/Counter'
import { CityListings } from './components/CityListings'
import { Testimonials } from './components/Testimonials'
import { Agents } from './components/Agents'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keyhold — Real Estate Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedProperties />
        <WhyChooseUs />
        <Counter />
        <CityListings />
        <Testimonials />
        <Agents />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
