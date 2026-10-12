import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { AboutBands } from './components/AboutBands'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/*
 * Ecohive — web-hosting marketing page. Section order matches the reference
 * 1:1: transparent header over the hero → domain search → feature grid →
 * overlapping pricing tiers → two light split content bands → FAQ accordion →
 * testimonial card → footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Ecohive — Web Hosting Template'
  }, [])

  return (
    <div className="bg-shell font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DomainSearch />
        <Features />
        <Pricing />
        <AboutBands />
        <Faq />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
