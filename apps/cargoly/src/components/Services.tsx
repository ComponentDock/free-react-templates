import { Boxes, ClipboardList, Package, Truck, type LucideIcon } from 'lucide-react'
import { SERVICES_INTRO, SERVICES_LABEL } from '../data'

const services: ReadonlyArray<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: ClipboardList,
    title: 'Planning',
    text: 'Route, load and schedule planning with full customs paperwork handled.',
  },
  {
    icon: Truck,
    title: 'List Delivery',
    text: 'Same-day and scheduled deliveries with live GPS tracking for every truck.',
  },
  {
    icon: Package,
    title: 'Transport',
    text: 'Safe, insured transport for pallets, containers, and full truckloads.',
  },
  {
    icon: Boxes,
    title: 'Inventory',
    text: 'Warehousing and stock checks so your goods are counted at every stop.',
  },
]

/**
 * Services — four icon cards (source `section.service_part`): section header
 * with the "Deliverie Services" label + intro and a Planning / List Delivery /
 * Transport / Inventory grid.
 */
export function Services() {
  return (
    <section className="bg-white pb-24 pt-8" aria-label="Services">
      <div className="mx-auto max-w-6xl px-4 text-center lg:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{SERVICES_LABEL}</p>
        <h2 className="mt-3 font-display text-4xl font-bold text-ink">Cargoly Best</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body">{SERVICES_INTRO}</p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[4px] bg-soft p-8 text-left transition-colors hover:bg-lavender"
            >
              <service.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
