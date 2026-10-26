import { GUIDES } from '../data/guides'
import { GuideCard } from './GuideCard'

/**
 * Four cards in a `auto-fit` grid: no column breakpoints, no carousel. Four
 * 250 px minimums plus three 16 px gaps need a 1048 px grid, so the columns
 * fall 4 → 3 → 2 → 1 at 1080 / 814 / 548 viewport width — arithmetic, not
 * media queries.
 */
export function GuideGrid() {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 p-0">
      {GUIDES.map((guide) => (
        <li key={guide.id}>
          <GuideCard guide={guide} />
        </li>
      ))}
    </ul>
  )
}
