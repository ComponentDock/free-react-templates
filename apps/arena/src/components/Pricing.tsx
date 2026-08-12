import { Check } from 'lucide-react'
import { btnWhite } from '../brand'
import { pricingPlans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-magenta-500">
          Membership
        </p>
        <h2 className="font-display text-4xl text-white uppercase">Pricing plans</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-lg border border-white/10 bg-navy-800 p-8"
            >
              <h3 className="font-display text-xl text-white">{plan.name}</h3>
              <p className="mt-4 font-display text-5xl text-white">{plan.price}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                    <Check className="h-4 w-4 shrink-0 text-ember-500" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${btnWhite} mt-8 text-center`}>
                Choose Plane
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
