import { HeroCopy } from './components/HeroCopy'
import { PortraitPanel } from './components/PortraitPanel'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { TITLE_ID, TOP_ID } from './data/site'

/**
 * Belvedere — one portfolio screen: a two-item bar over a two-column hero that
 * pairs an arch-cropped portrait with a highlighted headline, a CTA pair and a
 * stats band. The whole page is CSS: two keyframes, no script, no state.
 */
export function App() {
  return (
    <div className="bv-shell" id={TOP_ID}>
      <SiteHeader />

      <main className="bv-main">
        <section className="bv-hero" aria-labelledby={TITLE_ID}>
          <PortraitPanel />
          <HeroCopy />
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
