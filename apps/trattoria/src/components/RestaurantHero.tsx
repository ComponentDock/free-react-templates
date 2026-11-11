import { TITLE_ID } from '../data/site'
import { HeroCopy } from './HeroCopy'
import { HoursCard } from './HoursCard'

/**
 * The 1 : 340px grid, bottom-aligned inside `main { flex: 1; align-items: flex-end }`.
 * The section hangs off the foot of the viewport rather than being centred, which
 * is what makes the document exactly 900 px at 1440 with 67.86 px of slack above.
 */
export function RestaurantHero() {
  return (
    <section className="tt-hero" aria-labelledby={TITLE_ID}>
      <HeroCopy />
      <HoursCard />
    </section>
  )
}
