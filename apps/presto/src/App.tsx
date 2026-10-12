import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Features } from './components/Features'
import { Support } from './components/Support'
import { MapBand } from './components/MapBand'
import { Testimonials } from './components/Testimonials'
import { BrandStrip } from './components/BrandStrip'
import { Faq } from './components/Faq'
import { Commitment } from './components/Commitment'
import { HelpCta } from './components/HelpCta'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

/*
 * Presto — web-hosting marketing page. Section order matches the reference 1:1:
 * transparent header over the violet wave hero → domain search and TLD prices →
 * the pricing triple that overlaps the hero's scallop divider → features band →
 * lilac support chips → map band repeating the features title → testimonials
 * slider → logo strip → FAQ → security split → help CTA → footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Presto — Web Hosting Template'
  }, [])

  return (
    <div className="bg-surface font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <Features />
        <Support />
        <MapBand />
        <Testimonials />
        <BrandStrip />
        <Faq />
        <Commitment />
        <HelpCta />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
