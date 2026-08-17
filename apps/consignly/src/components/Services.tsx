import { ArrowRight, Plane, Ship, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SERVICES, type ServiceIcon } from '../data'

const SERVICE_ICONS: Record<ServiceIcon, LucideIcon> = {
  plane: Plane,
  ship: Ship,
  truck: Truck,
}

/* Services — three white cards overlapping the hero bottom edge: icon box,
   title, blurb, and an uppercase "Read more" link with an arrow square
   that fills brand navy on hover. */
export function Services() {
  return (
    <section aria-label="Services" className="relative z-10 -mt-32 px-4 pb-24 md:-mt-40">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.icon]
          return (
            <div
              key={service.heading}
              className="group rounded bg-white p-8 shadow-[0_15px_30px_0_rgba(0,0,0,.1)]"
            >
              <div className="flex h-20 w-20 items-center justify-center text-accent-soft">
                <Icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-black">
                {service.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{service.text}</p>
              <a
                href="#about"
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.1rem] text-black transition-colors hover:text-brand"
              >
                Read more
                <span
                  className="flex h-[15px] w-[15px] items-center justify-center bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
