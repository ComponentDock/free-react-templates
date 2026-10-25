import { BackToTop, Preloader, ScrollProgress, SkipLink } from './components/Chrome'
import { Brands } from './components/Brands'
import { ClosingCta } from './components/ClosingCta'
import { CookieConsent } from './components/CookieConsent'
import { Featured } from './components/Featured'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Showroom } from './components/Showroom'
import { Trade } from './components/Trade'
import { UtilityBar } from './components/UtilityBar'
import { useTheme } from './theme'

/**
 * One page in the reference's order: skip link, progress bar, preloader, the
 * 40 px utility strip, the sticky header, then hero → featured → brands → trade
 * → showroom → closing band, the footer, and the three floating surfaces.
 * No carousel, no count-up, no reveal animation: this page has none.
 */
export function App() {
  const { dark, toggle } = useTheme()

  return (
    <div id="top" className="min-h-screen bg-ink-50 text-ink-800 dark:bg-gray-950 dark:text-gray-200">
      <SkipLink />
      <ScrollProgress />
      <Preloader />
      <UtilityBar />
      <Header dark={dark} onToggleTheme={toggle} />

      <main id="main-content">
        <Hero />
        <Featured />
        <Brands />
        <Trade />
        <Showroom />
        <ClosingCta />
      </main>

      <Footer />
      <CookieConsent />
      <BackToTop />
    </div>
  )
}
