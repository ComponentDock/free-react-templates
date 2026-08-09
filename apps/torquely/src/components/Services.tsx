import { BatteryCharging, ChevronRight, Cog, Disc, Droplet, Truck, Wrench } from 'lucide-react'

const services = [
  { title: 'Oil change', icon: Droplet },
  { title: 'Tire Change', icon: Disc },
  { title: 'Batteries', icon: BatteryCharging },
  { title: 'Engine Repair', icon: Cog },
  { title: 'Tow Truck', icon: Truck },
  { title: 'Car Maintenance', icon: Wrench },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            We offer Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl">
            Our car services
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist dark:text-white/60">
                  Even the all-powerful Pointing has no control about the blind texts it is an
                  almost unorthographic.
                </p>
                <a
                  href="#services"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-bold uppercase text-ink transition-colors hover:text-brand dark:text-white"
                >
                  Read more <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
