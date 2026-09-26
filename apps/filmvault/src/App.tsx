import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FilmVault — Photography Portfolio'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
