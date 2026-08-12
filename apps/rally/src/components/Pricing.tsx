import { Check } from 'lucide-react'
import { pricePlans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="bg-pricing py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold uppercase text-heading md:text-4xl">
            Ticket Pricing
          </h2>
          <p className="mt-4 text-muted">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricePlans.map((plan) => (
            <article
              key={plan.name}
              className="group flex flex-col rounded-md border border-gray-100 bg-white px-7 pt-10 text-center transition-colors hover:border-accent"
            >
              <h3 className="font-display text-xl font-bold uppercase text-heading">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted">{plan.audience}</p>
              <p className="mt-6 font-display text-4xl font-bold text-heading transition-colors group-hover:text-accent">
                {plan.price}
                <span className="ml-1 font-sans text-sm font-normal text-muted">/mo</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 overflow-hidden rounded-b-md">
                <a
                  href="#pricing"
                  className="block max-h-0 bg-[linear-gradient(0deg,#141da2_0%,#9b5cf6_100%)] py-3.5 text-[13px] font-medium uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:max-h-14 group-hover:opacity-100"
                >
                  Get Started
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
