import { HeroCopy } from './components/HeroCopy'
import { HeroMedia } from './components/HeroMedia'
import { SearchPanel } from './components/SearchPanel'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { HERO_ID, TITLE_ID, TOP_ID } from './data/site'

/**
 * Lakelight — one full-height hero on warm paper. The shell is a flex column
 * that floors at `100vh`, holding the bar and the single hero; the footer is
 * its sibling so the footer's height lands on the document and not on `main`,
 * which keeps the hero centred at exactly the reference's offset.
 */
export function App() {
  return (
    <>
      <div className="lk-shell" id={TOP_ID}>
        <SiteHeader />

        <main className="lk-main">
          <section className="lk-hero" id={HERO_ID} aria-labelledby={TITLE_ID}>
            <HeroCopy />
            <HeroMedia />
            <SearchPanel />
          </section>
        </main>
      </div>

      <SiteFooter />
    </>
  )
}
