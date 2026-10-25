import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ResponseBand } from './components/ResponseBand'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Areas } from './components/Areas'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'
import {
  BackToTop,
  CookieStrip,
  Preloader,
  ScrollProgress,
  SkipLink,
} from './components/Chrome'

/**
 * One page in the reference's order: chrome, licence strip + sticky header,
 * hero → response band (the live clock) → process → services → why-us → areas →
 * testimonials → FAQ → closing call-out, then the footer and the fixed surfaces.
 */
export function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SkipLink />
      <ScrollProgress />
      <Preloader />
      <Header />

      <main id="main-content">
        <Hero />
        <ResponseBand />
        <Process />
        <Services />
        <WhyUs />
        <Areas />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
      <CookieStrip />
      <BackToTop />
    </div>
  )
}
