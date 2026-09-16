import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsCounter } from './components/StatsCounter'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { CtaParallax } from './components/CtaParallax'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { QuoteModal } from './components/QuoteModal'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <Services />
        <Portfolio />
        <CtaParallax onQuoteClick={() => setIsModalOpen(true)} />
        <Testimonials />
        <Pricing />
        <Blog />
      </main>
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
