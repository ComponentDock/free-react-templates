import { Availability } from './components/Availability'
import { Booking } from './components/Booking'
import { Channels } from './components/Channels'
import { BackToTop, CookieStrip, MobileBar, ScrollProgress, SkipLink } from './components/Chrome'
import { Contact } from './components/Contact'
import { Counters } from './components/Counters'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Policies } from './components/Policies'
import { Pricing } from './components/Pricing'

/** Nine bands, one page, six working anchors. */
export function App() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Hero />
        <Counters />
        <Booking />
        <Availability />
        <Policies />
        <Channels />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
      <CookieStrip />
      <BackToTop />
    </>
  )
}
