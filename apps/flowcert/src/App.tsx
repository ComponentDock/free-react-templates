import { Areas } from './components/Areas'
import { BackToTop } from './components/BackToTop'
import { ClosingCta } from './components/ClosingCta'
import { CookieStrip } from './components/CookieStrip'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Preloader } from './components/Preloader'
import { PriceList } from './components/PriceList'
import { Process } from './components/Process'
import { Reviews } from './components/Reviews'
import { ScrollProgress } from './components/ScrollProgress'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'

/**
 * One page in the reference's band order: licence strip and header, the hero
 * that holds the quick-book card, then the letter, the published prices, the
 * rationale, the services, the towns, the reviews, the questions, and the
 * closing call-out over the footer.
 */
export function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:rounded-lg focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Preloader />
      <Header />
      <main id="main-content">
        <Hero />
        <Process />
        <PriceList />
        <WhyUs />
        <Services />
        <Areas />
        <Reviews />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <CookieStrip />
      <BackToTop />
    </div>
  )
}
