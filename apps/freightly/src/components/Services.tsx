import { Plane, Ship, Truck, Warehouse, FileSearch, Zap } from 'lucide-react'

const services = [
  {
    title: 'Air Freight',
    blurb: 'Express air cargo services for time-sensitive shipments.',
    bullets: ['Next-day options', 'Global coverage', 'Live tracking'],
    icon: Plane,
  },
  {
    title: 'Ocean Freight',
    blurb: 'Cost-effective sea freight for large and heavy cargo.',
    bullets: ['FCL & LCL', 'Port-to-door', 'Customs-ready docs'],
    icon: Ship,
  },
  {
    title: 'Ground Transport',
    blurb: 'Reliable overland haulage across the continent.',
    bullets: ['FTL & LTL', 'Temperature control', 'Route optimization'],
    icon: Truck,
  },
  {
    title: 'Warehousing',
    blurb: 'Secure storage and distribution hubs worldwide.',
    bullets: ['Flexible space', 'Inventory management', 'Cross-docking'],
    icon: Warehouse,
  },
  {
    title: 'Customs Brokerage',
    blurb: 'Hassle-free clearance with expert compliance guidance.',
    bullets: ['Documentation', 'Duty calculation', 'Regulatory advice'],
    icon: FileSearch,
  },
  {
    title: 'Express Delivery',
    blurb: 'Same-day and urgent courier services, city to city.',
    bullets: ['Same-day options', 'Dedicated couriers', 'Proof of delivery'],
    icon: Zap,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Our Services
        </p>
        <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          Complete Logistics Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          From air and ocean freight to warehousing and express delivery — everything your supply
          chain needs, under one roof.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/10 dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-400">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.blurb}
              </p>
              <ul className="mt-4 space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href="#calculator"
                className="mt-6 inline-flex text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
