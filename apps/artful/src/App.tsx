import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { ServiceCarousel } from './components/ServiceCarousel'
import { ServicesGrid } from './components/ServicesGrid'
import { VideoSection } from './components/VideoSection'
import { Features } from './components/Features'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Artful — Creative Art & Crafting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-artful-body">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <ServiceCarousel />
        <ServicesGrid />
        <VideoSection />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
