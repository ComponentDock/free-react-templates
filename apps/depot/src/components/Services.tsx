import { ArrowRight, Building2, Home, Map, MapPin, Search, Smartphone } from 'lucide-react'
import { services } from '../data'
import type { Service } from '../data'

const icons: Record<Service['icon'], typeof Search> = {
  search: Search,
  building: Building2,
  home: Home,
  locator: MapPin,
  map: Map,
  smartphone: Smartphone,
}

export function Services() {
  return (
    <section id="services-section" aria-label="Services" className="bg-section py-24">
      <div className="mx-auto max-w-[1170px] px-4 text-center">
        <h2 className="font-heading text-3xl font-light uppercase text-black md:text-4xl">
          Services
        </h2>
        <div className="mt-14 grid gap-10 text-left md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.title}>
                <Icon className="h-10 w-10 text-brand" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-heading text-xl font-light uppercase text-black">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-body">{service.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-brand"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
