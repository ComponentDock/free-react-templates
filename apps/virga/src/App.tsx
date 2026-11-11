import { ActionRow } from './components/ActionRow'
import { HeroCopy } from './components/HeroCopy'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { StatsBand } from './components/StatsBand'
import { TITLE_ID, TOP_ID } from './data/site'

/**
 * Virga — one edge-hosting hero screen. The two decorative layers come first so
 * their negative z-indexes and the shell's stacking context keep them under
 * everything without a hack; the bar and the hero follow in that order.
 */
export function App() {
  return (
    <div className="vg-shell" id={TOP_ID}>
      <div className="vg-grid" aria-hidden="true" />
      <div className="vg-glow" aria-hidden="true" />

      <SiteHeader />

      <main className="vg-main">
        <section className="vg-hero" aria-labelledby={TITLE_ID}>
          <HeroCopy />
          <ActionRow />
          <StatsBand />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
