import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { PropertySearch } from './components/PropertySearch'
import { Categories } from './components/Categories'
import { FeaturedProperties } from './components/FeaturedProperties'
import { VideoSection } from './components/VideoSection'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Havenridge — Real Estate Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <PropertySearch />
        <Categories />
        <FeaturedProperties />
        <VideoSection />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
