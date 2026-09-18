import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { DestinationSelect } from './components/DestinationSelect'
import { TourPackages } from './components/TourPackages'
import { AboutSection } from './components/AboutSection'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { FooterCTA } from './components/FooterCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tidal — Discover Your Favorite Place'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-text-primary">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar />
        <Services />
        <DestinationSelect />
        <TourPackages />
        <AboutSection />
        <Testimonials />
        <Blog />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  )
}
