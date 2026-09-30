import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WorkShowcase } from './components/WorkShowcase'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/** Upstart — minimalist startup / design-agency one-pager:
 *  navbar (wordmark + Services dropdown) → pull-quote hero with bordered
 *  CTA card → 3-column services → alternating case-study halves on the
 *  light band → 3-up testimonials → white 4-widget footer. */
export function App() {
  useEffect(() => {
    document.title = 'Upstart — Startup & Design Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WorkShowcase />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
