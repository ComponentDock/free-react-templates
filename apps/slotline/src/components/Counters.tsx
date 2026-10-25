import { counters } from '../content'
import { useCounter } from '../lib/use-counter'
import { useInView } from '../lib/use-in-view'
import { containerClass } from './ui'

interface CounterProps {
  target: number
  label: string
  active: boolean
}

function Counter({ target, label, active }: CounterProps) {
  const value = useCounter(target, active)
  return (
    <div className="text-center">
      <p data-testid={`counter-${target}`} className="text-4xl leading-none font-bold text-primary-600 tabular-nums lg:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm leading-5 font-medium text-gray-600">{label}</p>
    </div>
  )
}

/** The four figures count once, when half the band is on screen. */
export function Counters() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  return (
    <section aria-label="Slotline in numbers" className="border-y border-gray-200 bg-gray-50 py-16 lg:py-20">
      <div className={containerClass}>
        <div ref={ref} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {counters.map((counter) => (
            <Counter
              key={counter.label}
              target={counter.target}
              label={counter.label}
              active={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
