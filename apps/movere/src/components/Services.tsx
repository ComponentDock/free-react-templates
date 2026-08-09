import { Boxes, Building2, Piano, Route, Truck, Warehouse } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  {
    icon: Truck,
    title: 'Local Moving',
    blurb: 'Same-day and next-day moves across your metro area with crews that know the shortcuts.',
  },
  {
    icon: Route,
    title: 'Long Distance',
    blurb: 'Cross-country relocations tracked end-to-end, with guaranteed delivery windows.',
  },
  {
    icon: Building2,
    title: 'Commercial Moving',
    blurb: 'Office and retail relocations planned around your business hours, downtime minimized.',
  },
  {
    icon: Boxes,
    title: 'Packing Services',
    blurb: 'Professional packing and unpacking with premium materials for every room.',
  },
  {
    icon: Warehouse,
    title: 'Storage Solutions',
    blurb: 'Climate-controlled short- and long-term storage with 24/7 access options.',
  },
  {
    icon: Piano,
    title: 'Specialty Items',
    blurb: 'Pianos, safes, artwork, and antiques moved with custom crating and white-glove care.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Services
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Moving Solutions for Every Need
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            From a single couch to a whole household, Movere has the right crew, truck, and plan for
            your move.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
