import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { FeaturesAccordion } from './components/FeaturesAccordion'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

/** Boostly — startup & SaaS landing one-pager: sticky nav with a Join Us
 *  gradient button → peach split hero → bordered service cards →
 *  philosophy split with a peach photo strip → pricing cards on an orange
 *  band → feature accordion beside a photo → dark plum testimonial slider
 *  with white cards → blog cards with category badges → black 4-column
 *  footer. */
export function App() {
  useEffect(() => {
    document.title = 'Boostly — Startup & SaaS Landing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <FeaturesAccordion />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
