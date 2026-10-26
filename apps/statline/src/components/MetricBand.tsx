import { METRICS } from '../content'
import { BandHead } from './BandHead'
import { MetricCard } from './MetricCard'

/**
 * The page's single band: a two-part head over a four-item grid. The track is
 * intrinsic — `repeat(auto-fit, minmax(240px, 1fr))` — so the column count
 * follows the container width with no breakpoint anywhere.
 */
export function MetricBand() {
  return (
    <main className="band">
      <BandHead />
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px] p-0">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </ul>
    </main>
  )
}
