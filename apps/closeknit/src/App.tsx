import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { CounterBand } from './components/CounterBand'
import { Feed } from './components/Feed'
import { Circles } from './components/Circles'
import { People } from './components/People'
import { Privacy } from './components/Privacy'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'
import {
  BackToTop,
  CookieConsent,
  MobileCta,
  Preloader,
  ScrollProgress,
  SkipLink,
} from './components/Chrome'

/**
 * One page in the reference's order: chrome, the sticky header, hero → counter
 * band → feed → circles → people → privacy → pricing → testimonials → FAQ →
 * closing call-out, then the footer and the three fixed surfaces.
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
        <CounterBand />
        <Feed />
        <Circles />
        <People />
        <Privacy />
        <Pricing />
        <Testimonials />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
      <MobileCta />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
