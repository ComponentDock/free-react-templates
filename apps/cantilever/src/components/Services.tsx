import { Building2, Compass, Sofa } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  title: string
  blurb: string
  icon: LucideIcon
}

const services: Service[] = [
  {
    title: 'Architecture',
    blurb:
      'Complete building design — from site strategy and structure to facades that respond to light, climate, and context.',
    icon: Building2,
  },
  {
    title: 'Interior Design',
    blurb:
      'Material palettes, joinery, and spatial composition that make interiors feel calm, functional, and distinctly yours.',
    icon: Sofa,
  },
  {
    title: 'Concept Design',
    blurb:
      'Early-stage ideation and feasibility — massing studies, moodboards, and concept narratives that set the direction.',
    icon: Compass,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold uppercase text-ink sm:text-3xl dark:text-white">
          What We Offer to Our Clients
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded border border-black/5 bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-gray-900"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-9 w-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-base font-bold uppercase text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-mist dark:text-white/60">
                {service.blurb}
              </p>
              <a
                href="#services"
                className="mt-5 inline-block text-xs font-bold uppercase text-brand transition-colors hover:text-brand-dark"
              >
                View Details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
