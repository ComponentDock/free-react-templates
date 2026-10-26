import { Header } from './components/Header'
import { GuideGrid } from './components/GuideGrid'
import { PageFooter } from './components/PageFooter'

/**
 * Roadbook — one field-guide band on a near-black ground: a head over four
 * full-bleed photo cards. There is no navigation, no hero, no filter row and no
 * search field; the page is the band plus one line of attribution.
 */
export function App() {
  return (
    <div className="bg-ground font-sans text-ink">
      <main className="mx-auto max-w-[1312px] px-4 py-[clamp(36px,6vw,72px)]">
        <Header />
        <GuideGrid />
      </main>
      <PageFooter />
    </div>
  )
}
