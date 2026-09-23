import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
import { Testimonial } from './components/Testimonial'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Radiant — Business Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Gallery />
        <Pricing />
        <Features />
        <Testimonial />
      </main>
      <Footer />
    </div>
  )
}
