import { Flower2, Dumbbell, Sparkles, Bike } from 'lucide-react'
import { services, servicesButtonLabel, servicesEyebrow, servicesTitle } from '../data'

const icons = {
  flower: Flower2,
  dumbbell: Dumbbell,
  sparkles: Sparkles,
  bike: Bike,
} as const

export function Services() {
  return (
    <section id="services-section" className="bg-dark py-24">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <div className="mb-20">
          <p className="text-xs font-black uppercase tracking-[6px] text-brand">
            {servicesEyebrow}
          </p>
          <h2 className="mt-3 text-5xl font-bold uppercase tracking-[6px] text-white">
            {servicesTitle}
          </h2>
        </div>

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.title} className="text-center">
                <Icon className="mx-auto mb-[50px] h-12 w-12 text-white" aria-hidden="true" />
                <h3 className="mb-6 text-lg font-bold uppercase tracking-[1.5px] text-white">
                  {service.title}
                </h3>
                <p className="mx-auto max-w-[280px] text-sm leading-[30px] text-muted">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        <a
          href="#events-section"
          className="mt-16 inline-block bg-brand px-[50px] py-5 text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-white hover:text-dark"
        >
          {servicesButtonLabel}
        </a>
      </div>
    </section>
  )
}
