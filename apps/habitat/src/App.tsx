import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FilterSearch } from './components/FilterSearch'
import { Properties } from './components/Properties'
import { PopularRoom } from './components/PopularRoom'
import { Newsletter } from './components/Newsletter'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Habitat — Real Estate Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <FilterSearch />
        <Properties />
        <PopularRoom />
        <Newsletter />
        <WhyChooseUs />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
