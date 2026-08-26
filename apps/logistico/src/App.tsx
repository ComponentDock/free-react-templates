import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { ShipmentControl } from './components/ShipmentControl'
import { CTABanner } from './components/CTABanner'
import { Testimonials } from './components/Testimonials'
import { LatestNews } from './components/LatestNews'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Logistico — Logistics Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-dark transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ShipmentControl />
        <CTABanner />
        <Testimonials />
        <LatestNews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
