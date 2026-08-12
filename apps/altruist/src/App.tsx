import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CausesSection } from './components/CausesSection'
import { CollectionSection } from './components/CollectionSection'
import { ConditionSection } from './components/ConditionSection'
import { DonationBanner } from './components/DonationBanner'
import { DonationFormSection } from './components/DonationFormSection'
import { BrandStrip } from './components/BrandStrip'
import { EventsSection } from './components/EventsSection'
import { Footer } from './components/Footer'

/* Altruist — single-page charity & donation template (recreation of the
   ColorLib "Cause" demo): fixed header → hero (copy + photo/donation box)
   → Major Causes → Experience stats → condition carousel → donation
   banner → overlapping donation form → brand logos → Upcoming Events →
   footer. */
export function App() {
  useEffect(() => {
    document.title = 'Altruist — Charity & Donation'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <CausesSection />
        <CollectionSection />
        <ConditionSection />
        <DonationBanner />
        <DonationFormSection />
        <BrandStrip />
        <EventsSection />
        <Footer />
      </main>
    </div>
  )
}
