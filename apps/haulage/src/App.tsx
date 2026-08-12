import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { ServiceCards } from './components/ServiceCards'
import { OfferCards } from './components/OfferCards'
import { About } from './components/About'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { Articles } from './components/Articles'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Haulage — single-page logistics & cargo template (recreation of the
   ColorLib "Cargo" demo): top bar → sticky navbar → hero → service image
   cards → What We Offer → About Us → video/counters → Our Staff → Pricing
   → FAQ → Why Us → Happy Clients → Articles → Contact → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Haulage — Logistics & Cargo'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-smoke">
      <main className="flex-1">
        <TopBar />
        <Navbar />
        <Hero />
        <ServiceCards />
        <OfferCards />
        <About />
        <Team />
        <Pricing />
        <Faq />
        <WhyUs />
        <Testimonials />
        <Articles />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
