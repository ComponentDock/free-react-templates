import { ChefHat, Flame, UtensilsCrossed } from 'lucide-react'
import { SERVICES } from '../data'

const SERVICE_ICONS = { chef: ChefHat, flame: Flame, utensils: UtensilsCrossed } as const

/**
 * Services — "Our Best Services" (source `.our-services`): kicker + H2 and
 * three icon cards (Best Chef, Quality Food, Perfect Cook) in a responsive
 * 1-col mobile / 3-col desktop grid.
 */
export function Services() {
  return (
    <section id="services" className="bg-white py-24 lg:py-[195px] lg:pb-[140px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="text-base font-medium text-brand">Services We Offer</span>
          <h2 className="mt-3 font-display text-4xl font-semibold text-ink lg:text-[49px]">
            Our Best Services
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICES.map(({ icon, title, paragraph }) => {
            const Icon = SERVICE_ICONS[icon]
            return (
              <article
                key={title}
                className="rounded-md bg-mist p-8 text-center transition-shadow hover:shadow-lg"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{title}</h3>
                <p className="mt-3 leading-relaxed text-navy">{paragraph}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
