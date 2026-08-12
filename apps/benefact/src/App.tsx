import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CauseStrip } from './components/CauseStrip'
import { LatestCauses } from './components/LatestCauses'
import { WhyChooseUs } from './components/WhyChooseUs'
import { LatestEvent } from './components/LatestEvent'
import { DonateForm } from './components/DonateForm'
import { CtaStrip } from './components/CtaStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Benefact — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <CauseStrip />
        <LatestCauses />
        <WhyChooseUs />
        <LatestEvent />
        <DonateForm />
        <CtaStrip />
      </main>
      <Footer />
    </div>
  )
}
