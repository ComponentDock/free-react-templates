import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { InnovationCountdown } from './components/InnovationCountdown'
import { Features } from './components/Features'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Pricing } from './components/Pricing'
import { Sponsors } from './components/Sponsors'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Conclave — a UX conference landing page. Section order mirrors the
   source template 1:1: navbar → hero → innovation + countdown → features
   → speakers → schedule → pricing → sponsors → gallery → blog → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Conclave — UX Conference 2025'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans text-[#242424]">
      <Navbar />
      <main className="flex-1">
        <HeroBanner />
        <InnovationCountdown />
        <Features />
        <Speakers />
        <Schedule />
        <Pricing />
        <Sponsors />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
