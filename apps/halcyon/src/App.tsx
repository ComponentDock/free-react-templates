import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Discount } from './components/Discount'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { BigQuote } from './components/BigQuote'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Halcyon — Spa & Wellness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Discount />
        <Features />
        <Testimonials />
        <BigQuote />
      </main>
      <Footer />
    </div>
  )
}
