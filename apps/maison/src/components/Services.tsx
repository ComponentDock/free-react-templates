import { ArrowRight, Lightbulb, Ruler, UtensilsCrossed } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    title: 'Smart Kitchen Setup',
    blurb:
      'If you are looking at blank cassettes on the web, you may be very confused at the difference in price.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Space Planning',
    blurb:
      'Thoughtful floor plans that shape how a home flows, feels, and functions for the people in it.',
    icon: Ruler,
  },
  {
    title: 'Lighting Design',
    blurb:
      'Layered lighting that highlights architecture and sets the mood of every room after dark.',
    icon: Lightbulb,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
          We are Maison
        </p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-5xl">
          Top Services That We Offers
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="border border-black/10 bg-white p-8 transition-colors hover:border-brand dark:border-white/10 dark:bg-gray-900"
            >
              <service.icon className="h-10 w-10 text-brand-dark" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                {service.blurb}
              </p>
              <ButtonLink
                href="#services"
                className="mt-5 rounded-none bg-brand px-6 py-3 text-xs font-bold uppercase text-ink transition-colors hover:bg-brand-dark"
              >
                View Details <ArrowRight className="h-3 w-3" aria-hidden="true" />
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
