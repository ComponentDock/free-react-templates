import { ButtonLink } from '@free-react-templates/ui'
import { PRICING_PLANS } from '../data'

/**
 * Pricing — parallax section over a fixed-attachment gym photo with a dark
 * overlay: three white cards, each with a photo strip, a green 36px price
 * with a "/ Month" suffix, a 22px plan title, three feature bullets, and an
 * "Enroll Now" button. The source section has no section heading — cards
 * start directly.
 */
export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative mt-25 bg-fixed bg-cover bg-center py-25"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vigor-pricing-bg/1600/900)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.title}
              className="mb-25 overflow-hidden rounded-[10px] bg-white shadow-lg"
            >
              <img src={plan.image} alt="" className="h-40 w-full object-cover" />
              <div className="px-10 py-10">
                <h2 className="text-4xl font-semibold text-brand">
                  {plan.price}
                  <span className="text-sm italic text-body"> / Month</span>
                </h2>
                <h5 className="mt-8 text-xl font-semibold text-ink">{plan.title}</h5>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-body">
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  variant="outline"
                  className="mt-8 min-w-[200px] rounded-[10px] border-[3px] border-brand px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand hover:bg-brand hover:text-white"
                >
                  Enroll Now
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
