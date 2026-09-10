import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { BlogCards } from './components/BlogCards'
import { About } from './components/About'
import { ServiceArea } from './components/ServiceArea'
import { Promo } from './components/Promo'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'PackWell — Logistics & Freight Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BlogCards />
        <About />
        <ServiceArea />
        <Promo />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
