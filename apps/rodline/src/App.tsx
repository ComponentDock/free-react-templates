import { Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Availability, StickyCall } from './components/Closing'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OfferBar } from './components/OfferBar'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

/**
 * One page in the reference's order: skip link, progress strip, preloader, the
 * offer bar (which scrolls away), the sticky header, then hero → why → services
 * → reviews → FAQ → availability, the mobile call bar and the footer.
 * No navigation, no theme toggle, no carousel controls.
 */
export function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-200">
      <SkipLink />
      <ScrollProgress />
      <Preloader />
      <OfferBar />
      <Header />

      <main id="main-content">
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <Faq />
        <Availability />
      </main>

      <StickyCall />
      <Footer />
    </div>
  )
}
