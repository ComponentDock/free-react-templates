import { Info } from 'lucide-react'
import {
  orderPlanLabel,
  pricingImage,
  pricingInfoLabel,
  pricingPlans,
  pricingTitle,
  planFeatures,
} from '../data'

export function Pricing() {
  return (
    <section
      id="pricing-section"
      className="relative bg-cover bg-center py-20 lg:py-[87px]"
      style={{ backgroundImage: `url(${pricingImage})` }}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-medium text-white">{pricingTitle}</h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative border-t-4 pt-14 pb-16 text-center ${
                plan.recommended
                  ? 'border-transparent bg-gradient-to-r from-brand to-brand-light text-white'
                  : 'border-brand bg-white text-ink'
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wide ${
                  plan.recommended ? 'text-white' : 'text-ink'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-6xl font-medium ${
                  plan.recommended ? 'text-white' : 'text-ink'
                }`}
              >
                {plan.price}
              </p>
              <ul
                className={`mx-auto mt-[59px] max-w-[220px] space-y-3 text-sm ${
                  plan.recommended ? 'text-white' : 'text-ink'
                }`}
              >
                {planFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <a
                  href="#contact-section"
                  aria-label={`${pricingInfoLabel}: ${plan.name}`}
                  className="flex h-[19px] w-[19px] items-center justify-center rounded-full bg-accent text-white"
                >
                  <Info className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
              <div className="mt-9 flex justify-center">
                <a
                  href="#contact-section"
                  className={`flex h-[54px] w-[180px] items-center justify-center text-sm font-semibold ${
                    plan.recommended ? 'border border-white/70 text-white' : 'bg-white text-ink'
                  }`}
                >
                  {orderPlanLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
