import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Mission } from './components/Mission'
import { Projects } from './components/Projects'
import { CTABanner } from './components/CTABanner'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Logistix — Logistics Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Mission />
        <Projects />
        <CTABanner />
        <Testimonial />
        <Blog />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
