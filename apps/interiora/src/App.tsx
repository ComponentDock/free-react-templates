import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { StatsBand } from './components/StatsBand'
import { AboutSplit } from './components/AboutSplit'
import { QuoteBand } from './components/QuoteBand'
import { ProfileBlock } from './components/ProfileBlock'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { VendorsBand } from './components/VendorsBand'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

/* Interiora — single-page interior design studio landing: navbar → hero
   slider → stats → about split → client quote → design profile → services
   → testimonials → vendors → CTA band → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Interiora — Interior Design Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <StatsBand />
        <AboutSplit />
        <QuoteBand />
        <ProfileBlock />
        <Services />
        <Testimonials />
        <VendorsBand />
        <CtaBand />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
