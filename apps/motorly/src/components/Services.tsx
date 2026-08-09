import { Wrench, Settings, Droplet, Gauge } from 'lucide-react'

const services = [
  {
    title: 'Engine Overhaul',
    description: 'Consectetur adipiscing elit incididunt ut labore et dolore',
    icon: Wrench,
  },
  {
    title: 'Power Steering',
    description: 'Consectetur adipiscing elit incididunt ut labore et dolore',
    icon: Settings,
  },
  {
    title: 'Oil change',
    description: 'Consectetur adipiscing elit incididunt ut labore et dolore',
    icon: Droplet,
  },
  {
    title: 'Upgrades Car',
    description: 'Consectetur adipiscing elit incididunt ut labore et dolore',
    icon: Gauge,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            What We Do?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-mist dark:text-white/60">
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
