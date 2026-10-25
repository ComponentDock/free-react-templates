import { useEffect } from 'react'
import { ClosingCta } from './components/ClosingCta'
import { Counters } from './components/Counters'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gradebook } from './components/Gradebook'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Migration } from './components/Migration'
import { Pricing } from './components/Pricing'
import { Roles } from './components/Roles'
import { ScrollProgress } from './components/ScrollProgress'
import { Standards } from './components/Standards'
import { PAGE_TITLE, SKIP_TARGET } from './lib/site'

/**
 * Chalkline — one page in the reference's order: the mint hero, the counted-up
 * counter band, roles and the capability matrix, the gradebook mock, the
 * interoperability list, the migration comparison and its four stages, three
 * pricing tiers, six questions, the gradient closing band and the footer.
 */
export function App() {
  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  return (
    <div id="top">
      <a
        href={SKIP_TARGET}
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-lg focus:bg-primary-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Header />

      <main id="main-content">
        <Hero />
        <Counters />
        <Roles />
        <Gradebook />
        <Standards />
        <Migration />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>

      <Footer />
    </div>
  )
}
