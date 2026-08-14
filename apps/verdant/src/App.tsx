import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Features } from './components/Features'
import { SiteHalf } from './components/SiteHalf'
import { ProductsCarousel } from './components/ProductsCarousel'
import { Counters } from './components/Counters'
import { TestimonialsCarousel } from './components/TestimonialsCarousel'
import { BlogStrip } from './components/BlogStrip'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'
import { siteHalves } from './data'

/** Verdant — one-page template-showcase landing.
 *  Section order matches the live preview DOM 1:1. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />
      <main>
        <HeroSlider />
        <Features />
        <SiteHalf {...siteHalves[0]!} />
        <SiteHalf {...siteHalves[1]!} flipped />
        <ProductsCarousel />
        <Counters />
        <TestimonialsCarousel />
        <BlogStrip />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
