import { cn } from '@free-react-templates/ui'
import { pricingPlans } from '../data'

/** Pricing section (reference `.pricing-section.spad.pt-0`): three plan
 *  cards with gradient title bars; the middle "STAR Plan" is highlighted
 *  with a flat magenta title, inset ring, and soft drop shadow. */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing plans" className="bg-white pb-[105px]">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {pricingPlans.map(({ name, price, features }, i) => {
            const gold = i === 1
            return (
              <article
                key={name}
                className={cn(
                  'flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
                  gold &&
                    'shadow-[0_32px_43px_rgba(0,0,0,0.35)] ring-2 ring-inset ring-primary-600',
                )}
              >
                <div
                  className={cn(
                    'px-8 py-7 text-center',
                    gold ? 'bg-primary-600' : 'bg-gradient-to-r from-[#7246b3] to-[#431483]',
                  )}
                >
                  <h3 className="font-heading text-xl font-semibold text-white uppercase">
                    {name}
                  </h3>
                </div>
                <div className="flex flex-1 flex-col px-8 py-10 text-center">
                  <p className="font-heading text-6xl font-normal text-body-gray">{price}</p>
                  <ul className="mt-8 space-y-3 text-sm text-body-gray">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-10 inline-block w-full rounded-[14px] bg-primary-600 py-5 text-sm text-white transition-colors hover:bg-primary-700"
                  >
                    Get Plan
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
