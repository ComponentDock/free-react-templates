import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LogoStrip } from './components/LogoStrip'
import { TestimonialRow } from './components/TestimonialRow'
import { PricingSection } from './components/PricingSection'
import { AboutSplit } from './components/AboutSplit'
import { ServiceGrid } from './components/ServiceGrid'
import { InfoBand } from './components/InfoBand'
import { StatsAndFaq } from './components/StatsAndFaq'
import { CallActionBand } from './components/CallActionBand'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

/*
 * Skyport — cloud-hosting marketing page. Section order matches the reference
 * 1:1: fixed header (dark utility strip over the white nav row) → viewport-tall
 * azure hero → five-mark grey logo strip → single testimonial row → pricing
 * triple → 6/6 about split → six-card feature grid → dark photo band →
 * counter + Q/A band → brand-blue call-action band → two-column contact form →
 * dark three-widget footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Skyport — Web Hosting Template'
  }, [])

  return (
    <div className="bg-surface font-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <TestimonialRow />
        <PricingSection />
        <AboutSplit />
        <ServiceGrid />
        <InfoBand />
        <StatsAndFaq />
        <CallActionBand />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
