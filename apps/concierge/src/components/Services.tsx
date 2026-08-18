import { useState } from 'react'
import {
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Globe,
  Map,
  Mountain,
  Palmtree,
  Plane,
  type LucideIcon,
} from 'lucide-react'
import { SERVICES, type ServiceIcon } from '../data'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  mountain: Mountain,
  map: Map,
  briefcase: Briefcase,
  palmtree: Palmtree,
  globe: Globe,
  plane: Plane,
}

const VISIBLE = 3

/** Services — light section, uppercase teal heading, Prev/Next pills, and
    a carousel of six white feature cards. Off-window cards are translated
    away and marked aria-hidden (client-side state, no slider library). */
export function Services() {
  const [index, setIndex] = useState(0)
  const maxIndex = SERVICES.length - VISIBLE

  const next = () => setIndex((i) => (i + 1) % (maxIndex + 1))
  const prev = () => setIndex((i) => (i + maxIndex) % (maxIndex + 1))

  return (
    <section className="bg-light pb-0" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-2xl font-bold uppercase text-brand">Our Services</h2>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous services"
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next services"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative z-10 -mb-64 mt-10 overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${index * (100 / VISIBLE)}%)` }}
          >
            {SERVICES.map((service, i) => {
              const inView = i >= index && i < index + VISIBLE
              const Icon = ICONS[service.icon]
              return (
                <article
                  key={service.title}
                  aria-hidden={inView ? undefined : 'true'}
                  className="w-1/3 shrink-0 px-3 pb-28"
                >
                  <div className="flex h-full flex-col bg-white p-10 shadow-[0_15px_30px_rgba(0,0,0,0.05)]">
                    <Icon size={70} strokeWidth={1} className="text-brand" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-black/50">
                      {service.blurb}
                    </p>
                    <a
                      href="#services"
                      className="mt-5 block text-xs font-bold uppercase tracking-[0.1em] text-mute transition-colors hover:text-ink"
                    >
                      Learn More
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
