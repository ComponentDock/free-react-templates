import { Headphones, LifeBuoy, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Expert Technicians',
    icon: Wrench,
    blurb: 'Certified engineers handle every install, migration, and fix with care.',
  },
  {
    title: 'Professional Service',
    icon: Headphones,
    blurb: 'Friendly, round-the-clock support that treats your questions seriously.',
  },
  {
    title: 'Great Support',
    icon: LifeBuoy,
    blurb: 'Documentation, guides, and a community that always has your back.',
  },
] as const

export function Services() {
  return (
    <section id="service" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-night dark:text-white sm:text-4xl">
            Some Features that Made us Unique
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="bg-white p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-colors hover:bg-gradient-to-b hover:from-primary-500 hover:to-azure hover:text-white dark:bg-gray-900"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-primary-500 to-azure text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-night dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {service.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
