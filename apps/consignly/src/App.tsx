import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { CtaBand } from './components/CtaBand'
import { Testimonials } from './components/Testimonials'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Consignly — single-page logistics & freight landing: navbar + hero in
   the banner, then services → about → CTA band → testimonials + why choose
   us → blog in main, footer last. */
export function App() {
  useEffect(() => {
    document.title = 'Consignly — Logistics Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Services />
        <About />
        <CtaBand />
        <section aria-label="Customer feedback" className="bg-surface px-4 py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-2">
            <Testimonials />
            <WhyChooseUs />
          </div>
        </section>
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
