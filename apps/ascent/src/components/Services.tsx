import { Layout, Palette, Smartphone, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  palette: Palette,
  layout: Layout,
  smartphone: Smartphone,
}

type ServiceIcon = (typeof services)[number]['icon']

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wide text-brand">Services</span>
          <h2 className="mt-3 font-display text-4xl font-normal text-ink">
            With more than 20 years of experience we can deliver the best product design.
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <article
                key={service.title}
                className="rounded-md border-2 border-line p-12 text-center transition-colors hover:border-brand"
              >
                <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-medium text-ink">{service.title}</h3>
                <p className="mt-4 text-muted">{service.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
