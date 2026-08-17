import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { CtaBand } from './components/CtaBand'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { News } from './components/News'
import { Footer } from './components/Footer'

/* Fiscal — single-page finance & business consulting landing: navbar →
   hero → features → services → CTA band → portfolio → testimonials →
   news → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Fiscal — Finance Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <CtaBand />
        <Portfolio />
        <Testimonials />
        <News />
      </main>
      <Footer />
    </div>
  )
}
