import { useEffect } from 'react'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { Navbar } from './components/Navbar'
import { PlanRow } from './components/PlanRow'
import { RatingBand } from './components/RatingBand'
import { ReasonGrid } from './components/ReasonGrid'
import { Testimonials } from './components/Testimonials'
import { UtilityBar } from './components/UtilityBar'

/**
 * Rackline — web-hosting marketing page. Section order: the sticky header stack
 * (white utility strip over the flat slate navigation) → the 600px two-slide
 * photo hero → the light plan band with three shadowed cards → the 600px rating
 * band → the white reason grid whose tiles flood lime on hover → the light
 * testimonial carousel → the slate footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Rackline — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-surface font-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-[2100] focus:bg-lime focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-[100]">
        <UtilityBar />
        <Navbar />
      </header>

      <main id="main">
        <HeroSlider />
        <PlanRow />
        <RatingBand />
        <ReasonGrid />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
