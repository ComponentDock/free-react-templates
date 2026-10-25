import type { GridCell } from '../data'

export interface CellGridProps {
  cells: GridCell[]
}

/**
 * The hairline grid. The separators are not borders: the wrapper carries the
 * gutter colour with `gap-px`, the cells are white, and `overflow-hidden`
 * clips the outer corners — so the cells read as separated by hairlines
 * instead of framed individually.
 */
export function CellGrid({ cells }: CellGridProps) {
  return (
    <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
      {cells.map((cell) => (
        <div key={cell.title} className="flex flex-col bg-white p-6 lg:p-8">
          <h3 className="text-lg font-bold text-ink-800">{cell.title}</h3>
          <p className="mt-2 flex-1 text-ink-500">{cell.body}</p>
          <p className="mt-4 text-sm font-bold text-primary-700">{cell.badge}</p>
        </div>
      ))}
    </div>
  )
}
