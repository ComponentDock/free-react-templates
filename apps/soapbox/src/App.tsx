import { EventHero } from './components/EventHero'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'

/**
 * Soapbox — one event screen: a blue ground with a hairline grid and three
 * rings, a wordmark bar, and a hero pairing an oversized headline with a lime
 * countdown card. The Component Dock line sits outside the 100vh shell.
 */
export function App() {
  return (
    <>
      <div className="sp-shell">
        <div className="sp-deco" aria-hidden="true">
          <span className="sp-ring sp-ring--1" />
          <span className="sp-ring sp-ring--2" />
          <span className="sp-ring sp-ring--3" />
        </div>

        <SiteHeader />

        <main className="sp-main">
          <EventHero />
        </main>
      </div>

      <SiteFooter />
    </>
  )
}
