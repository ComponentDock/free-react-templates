import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Causes } from './components/Causes'
import { Donors } from './components/Donors'
import { Testimonials } from './components/Testimonials'
import { SuccessStories } from './components/SuccessStories'
import { NewsAboutGallery } from './components/NewsAboutGallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Embrace — Charity & Donation Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Causes />
        <Donors />
        <Testimonials />
        <SuccessStories />
        <NewsAboutGallery />
      </main>
      <Footer />
    </div>
  )
}
