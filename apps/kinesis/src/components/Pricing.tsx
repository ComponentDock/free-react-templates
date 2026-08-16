import { Check } from 'lucide-react'
import { plans } from '../data'

/* Three pricing plan cards: name, large red price, check-list of five
   features and a "Get Started" button. */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing plans" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-wide text-primary">
            Our Pricing
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold uppercase text-heading lg:text-[34px]">
            Pricing &amp; Packages
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="bg-white p-8 text-center transition-shadow hover:shadow-[0_24px_48px_-13px_rgba(0,0,0,0.11)]"
            >
              <p className="text-sm font-bold uppercase tracking-[1px] text-ink">{plan.name}</p>
              <p className="mt-4 font-display text-5xl font-semibold text-primary">
                <sup className="mr-1 text-2xl font-normal text-neutral-400">$</sup>
                {plan.price}
              </p>
              <ul className="mt-8 space-y-3 text-left">
                {plan.featuresList.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 px-6 py-2.5">
                    <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn-square mt-8 inline-block">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
