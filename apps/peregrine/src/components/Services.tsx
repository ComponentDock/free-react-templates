import { Compass, Flag, Map, Plane } from 'lucide-react'
import { services, servicesSectionTitle } from '../data'

const icons = {
  compass: Compass,
  plane: Plane,
  map: Map,
  flag: Flag,
} as const

export function Services() {
  return (
    <section id="services-section" className="bg-soft px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-ink">{servicesSectionTitle}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.title} className="text-center">
                <span className="inline-flex h-20 w-20 items-center justify-center">
                  <Icon
                    className="h-[60px] w-[60px] bg-gradient-to-br from-[#6b75ff] to-[#59b7ff] bg-clip-text text-transparent"
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-base leading-[1.8] text-fade">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
