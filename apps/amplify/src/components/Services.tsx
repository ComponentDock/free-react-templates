import type { LucideIcon } from 'lucide-react'
import { PieChart, Presentation, Pyramid } from 'lucide-react'
import { services, type ServiceIcon } from '../data'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  strategy: Pyramid,
  analytics: PieChart,
  social: Presentation,
}

export function Services() {
  return (
    <section id="services" className="bg-white pt-20 pb-4">
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-normal text-ink md:text-5xl">Our Services</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <article key={service.title} className="text-center">
                <div className="mx-auto mb-8 flex h-[110px] w-[145px] items-center justify-center rounded-[80px_200px_200px_362px] bg-tint text-ink">
                  <Icon className="h-[42px] w-[42px]" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="leading-relaxed text-body">{service.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
