import { useEffect } from 'react'
import { CtaStrip } from './components/CtaStrip'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowToSteps } from './components/HowToSteps'
import { Navbar } from './components/Navbar'
import { PricingTable } from './components/PricingTable'
import { ServiceBand } from './components/ServiceBand'
import { WhyChooseSplit } from './components/WhyChooseSplit'

/**
 * Skyvault — web-hosting marketing page. Section order matches the reference
 * 1:1: transparent fixed header (with the off-canvas panel below the desktop
 * breakpoint) → 821 px violet-gradient night-sky hero with a line-art skyline,
 * drifting clouds and the domain search bar → white three-step row with a mint
 * middle badge and the violet price pill → violet photo band with three white
 * service cards and floating "Read more" chips → single bordered four-column
 * pricing table → cool-grey 6/6 why-choose split → violet announcement strip →
 * deepest-violet footer with the contact form and four link columns.
 */
export function App() {
  useEffect(() => {
    document.title = 'Skyvault — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[200] focus:rounded-[12px] focus:bg-mint focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <HowToSteps />
        <ServiceBand />
        <PricingTable />
        <WhyChooseSplit />
        <CtaStrip />
      </main>

      <Footer />
    </div>
  )
}
