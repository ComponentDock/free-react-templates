import { Droplets, Leaf, PencilRuler } from 'lucide-react'
import type { ComponentType } from 'react'
import { SERVICES } from '../data'
import type { ServiceIcon } from '../data'

const SERVICE_ICONS: Record<ServiceIcon, ComponentType<{ className?: string }>> = {
  'pencil-ruler': PencilRuler,
  leaf: Leaf,
  droplets: Droplets,
}

/* Services — three-column grid with green icons, titles, and blurbs,
   separated by pale-sage borders and a green-tinted hover shadow. */
export function Services() {
  return (
    <section aria-label="Services" id="services">
      <div className="mx-auto grid max-w-7xl px-6 py-20 md:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.icon]
          return (
            <article
              key={service.title}
              className="border border-sage-pale p-10 transition-shadow hover:shadow-[0_15px_25px_rgba(0,136,15,0.1)]"
            >
              <Icon className="h-12 w-12 text-garden" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-forest">{service.title}</h3>
              <p className="mt-3 text-xl leading-relaxed text-sage">{service.blurb}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
