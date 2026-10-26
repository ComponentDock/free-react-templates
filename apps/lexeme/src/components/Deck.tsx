import { DECK } from '../data/deck'
import { FlipCard } from './FlipCard'

/**
 * Four cards in an `auto-fit` grid: 240 px minimums plus three 20 px gaps need
 * a 1,020 px grid, so the columns fall 4 → 3 → 2 → 1 at 1,052 / 792 / 532
 * viewport width. That is arithmetic on the `minmax`, not a breakpoint — there
 * is no column media query anywhere in this app.
 */
export function Deck() {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 p-0">
      {DECK.map((card, index) => (
        <FlipCard key={card.id} card={card} index={index} />
      ))}
    </ul>
  )
}
