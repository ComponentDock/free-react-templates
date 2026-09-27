import { useEffect } from 'react'
import { HeaderBar } from './components/HeaderBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { FeaturedProperties } from './components/FeaturedProperties'
import { MapSection } from './components/MapSection'
import { HotDeal } from './components/HotDeal'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Homeward — Real Estate Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-heading">
      <HeaderBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar />
        <FeaturedProperties />
        <MapSection />
        <HotDeal />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
