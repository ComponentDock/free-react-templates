import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Steps } from './components/Steps'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

/* Fiscale — single-page finance consulting landing: navbar → hero → steps →
   features → testimonials → pricing → CTA band → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Fiscale — Finance Consulting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <Steps />
        <Features />
        <Testimonials />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
