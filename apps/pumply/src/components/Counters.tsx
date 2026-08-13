import { counters } from '../data'

export function Counters() {
  return (
    <div
      aria-label="Club statistics"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
    >
      {counters.map((counter) => (
        <div key={counter.label} className="flex items-start gap-6">
          <counter.icon className="h-12 w-12 shrink-0 text-primary" aria-hidden="true" />
          <div className="counter-text">
            <strong className="block text-[2.5rem] font-bold leading-none text-white">
              {counter.value}
            </strong>
            <span className="mt-2 block text-base text-white">{counter.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
