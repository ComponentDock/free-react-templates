import { STAYS } from '../data/stays'
import { StayCard } from './StayCard'

/**
 * The page's whole list: a single-column grid of 20 px gaps. There is no
 * multi-column track and no `auto-fit` — the reference stacks every card at
 * every width, and the responsive behaviour lives inside each card.
 */
export function StayList() {
  return (
    <div className="grid gap-5">
      {STAYS.map((stay) => (
        <StayCard key={stay.id} stay={stay} />
      ))}
    </div>
  )
}
