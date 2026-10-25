import { COUNTERS, COUNTERS_NOTE } from '../content'
import { Container, Counter } from './ui'

/**
 * Four counters on a `#f9fafb` strip between two hairlines. The figures are
 * authored text in the DOM; the animation is additive.
 */
export function StatsStrip() {
  return (
    <section
      id="stats"
      aria-label="Key numbers"
      className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900"
    >
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {COUNTERS.map((figure) => (
            <Counter key={figure.label} value={figure.value} label={figure.label} />
          ))}
        </div>
        <p className="mt-4 text-[11px] leading-4 text-gray-500 dark:text-gray-400">{COUNTERS_NOTE}</p>
      </Container>
    </section>
  )
}
