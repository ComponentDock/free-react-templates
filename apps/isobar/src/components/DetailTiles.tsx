import type { Detail } from '../data'

interface DetailTilesProps {
  readonly details: readonly Detail[]
}

/**
 * Four translucent plates over the conditions gradient. The `div` wrappers are
 * required by the description list's content model, and the wind value is what
 * makes a tile wrap to two or three lines — which is what sets the card height.
 */
export function DetailTiles({ details }: DetailTilesProps) {
  return (
    <dl aria-label="Current conditions" className="isobar-tiles">
      {details.map((detail) => (
        <div key={detail.label} className="rounded-tile bg-tile px-3 py-2.5">
          <dt className="text-[12px] text-muted">{detail.label}</dt>
          <dd className="mt-0.5 text-[15px] font-semibold">{detail.value}</dd>
        </div>
      ))}
    </dl>
  )
}
