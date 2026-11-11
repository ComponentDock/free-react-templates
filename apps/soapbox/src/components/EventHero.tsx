import { TITLE_ID } from '../data/site'
import { CountdownCard } from './CountdownCard'
import { HeroCopy } from './HeroCopy'

/**
 * The 1.35 : 0.65 grid. It is centred by `main { flex: 1; align-items: center }`
 * rather than padded to the viewport, which is what keeps the document at
 * exactly 900 px at 1440 and lets it grow only once the grid collapses at 1000.
 */
export function EventHero() {
  return (
    <section className="sp-hero" aria-labelledby={TITLE_ID}>
      <HeroCopy />
      <CountdownCard />
    </section>
  )
}
