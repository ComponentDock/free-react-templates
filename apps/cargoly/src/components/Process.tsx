import { Plane, Ship, TrainFront, Truck, type LucideIcon } from 'lucide-react'
import { PROCESS_LABEL, PROCESS_TITLE } from '../data'

const stats: ReadonlyArray<{ icon: LucideIcon; title: string; percent: number; text: string }> = [
  { icon: Truck, title: 'Trucks', percent: 50, text: 'Road freight across the whole continent.' },
  { icon: Plane, title: 'Air', percent: 10, text: 'Express air cargo for urgent deliveries.' },
  {
    icon: TrainFront,
    title: 'Railway',
    percent: 20,
    text: 'Rail intermodal for long, heavy loads.',
  },
  { icon: Ship, title: 'Ship', percent: 20, text: 'Sea freight for international shipping.' },
]

/**
 * Delivery process — centered header (source `section.deliverie_process`):
 * "World Wide" + "Deliveries Process" label, then four stat items (Trucks
 * 50% / Air 10% / Railway 20% / Ship 20%) with icon, title, progress bar and
 * short text.
 */
export function Process() {
  return (
    <section className="bg-soft py-20" aria-label="Delivery process">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{PROCESS_LABEL}</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-ink">{PROCESS_TITLE}</h2>
        <div className="mt-14 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title}>
              <div className="flex items-center justify-between">
                <stat.icon className="h-9 w-9 text-brand" aria-hidden="true" />
                <span className="font-display text-2xl font-bold text-ink">{stat.percent}%</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{stat.title}</h3>
              <div
                className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-lavender"
                role="progressbar"
                aria-valuenow={stat.percent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${stat.title} ${stat.percent} percent`}
              >
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${stat.percent}%` }}
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
