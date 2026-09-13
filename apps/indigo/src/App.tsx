import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { OfferFeatures } from './components/OfferFeatures'
import { Solutions } from './components/Solutions'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Indigo — SaaS Software Landing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <OfferFeatures />
        <Solutions />
        <Pricing />
        <Testimonials />
        <ClientLogos />
      </main>
      <Footer />
    </div>
  )
}
