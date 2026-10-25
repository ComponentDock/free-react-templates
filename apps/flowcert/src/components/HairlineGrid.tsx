import type { PriceCell } from '../data'

export interface HairlineGridProps {
  /** Cells render in order; the block's own ground shows through the 1 px gaps. */
  cells: PriceCell[]
  /** Accessible name for the list, e.g. `Published prices`. */
  label: string
}

/**
 * The page's single structural device: one rounded block whose cells are
 * divided by the block ground showing through `gap-px`, not by per-cell
 * borders. Shared by the price list and the services grid so the two bands
 * cannot drift apart.
 */
export function HairlineGrid({ cells, label }: HairlineGridProps) {
  return (
    <ul aria-label={label} className="hairline-grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
      {cells.map((cell) => (
        <li key={cell.title} className="flex flex-col bg-white p-6 lg:p-8">
          <h3 className="text-lg font-bold text-ink-800">{cell.title}</h3>
          <p className="mt-2 flex-1 text-ink-500">{cell.blurb}</p>
          <p className="mt-4 text-sm font-bold text-primary-700">{cell.price}</p>
        </li>
      ))}
    </ul>
  )
}
