import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { FavouritePlaces } from './components/FavouritePlaces'
import { VideoArea } from './components/VideoArea'
import { AboutCompany } from './components/AboutCompany'
import { Testimonial } from './components/Testimonial'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'GoQuest — Travel & Tour Booking Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        onCloseMenu={() => setMobileMenuOpen(false)}
      />
      <main>
        <Hero />
        <Services />
        <FavouritePlaces />
        <VideoArea />
        <AboutCompany />
        <Testimonial />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
