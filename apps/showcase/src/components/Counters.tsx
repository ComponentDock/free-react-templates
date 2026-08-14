import { Counter } from './Counter'
import { counters } from '../data'

export function Counters() {
  return (
    <section aria-label="Highlights" className="py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 lg:px-8">
        {counters.map((counter) => (
          <div key={counter.label} className="rounded-xl border border-line bg-white p-8">
            <Counter value={counter.value} label={counter.label} />
          </div>
        ))}
      </div>
    </section>
  )
}
