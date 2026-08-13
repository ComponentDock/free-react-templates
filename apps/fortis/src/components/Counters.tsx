import { Coffee, Code2, Monitor, Smile, type LucideIcon } from 'lucide-react'
import { counters } from '../data'

const counterIcons: LucideIcon[] = [Smile, Coffee, Code2, Monitor]

/** Counters band on the light background: four icon + number + label stats
 *  (40px icons, matching the reference's fact blocks). */
export function Counters() {
  return (
    <section className="bg-light py-10 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-4 text-center md:px-8 lg:grid-cols-4">
        {counters.map((counter, index) => {
          const Icon = counterIcons[index]!
          return (
            <div key={counter.label} className="flex items-center justify-center gap-3">
              <Icon className="h-10 w-10 shrink-0 text-brand" aria-hidden="true" />
              <div className="text-left">
                <span className="block text-2xl font-bold text-black">{counter.value}</span>
                <span className="block text-muted">{counter.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
