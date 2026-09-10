import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularItems } from './components/PopularItems'
import { About } from './components/About'
import { Services } from './components/Services'
import { VideoSection } from './components/VideoSection'
import { Testimonials } from './components/Testimonials'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Batterly — Bakery & Cake Shop'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <PopularItems />
        <About />
        <Services />
        <VideoSection />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  )
}
