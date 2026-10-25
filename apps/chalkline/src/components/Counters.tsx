import { counters } from '../data'
import { useCountUp } from '../hooks/useCountUp'

function Counter({ value, label }: { value: number; label: string }) {
  const { ref, value: count } = useCountUp(value)

  return (
    <div className="text-center">
      <span
        ref={ref}
        className="block font-mono text-4xl font-bold tabular-nums text-primary-600 lg:text-5xl"
      >
        {count}
      </span>
      <span className="mt-2 block text-sm font-medium text-gray-600">{label}</span>
    </div>
  )
}

/** Hairline-bounded grey band of four counted-up figures directly under the
 * hero — 2-up on a phone, 4-up from `sm`. */
export function Counters() {
  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4 lg:px-8">
        {counters.map((counter) => (
          <Counter key={counter.label} value={counter.value} label={counter.label} />
        ))}
      </div>
    </section>
  )
}
