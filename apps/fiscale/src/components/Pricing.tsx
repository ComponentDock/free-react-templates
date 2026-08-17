import { Check } from 'lucide-react'
import { PRICING_PLANS } from '../data'
import { PillLink } from './Pill'
import { cn } from '@free-react-templates/ui'

/* Pricing — three plan cards with prices, green-checkmark feature lists,
   and pill Get started buttons (Standard highlighted in green). */
export function Pricing() {
  return (
    <section aria-label="Pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-display text-[34px] font-bold text-accent">
          Pricing plans
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              data-testid="pricing-card"
              className="rounded border-2 border-line bg-white p-10 text-center"
            >
              <h3 className="mb-7 border-b-2 border-line-2 pb-7 font-display text-lg font-bold text-ink">
                {plan.name}
              </h3>
              <p
                className={cn(
                  'font-display text-[40px] font-bold text-accent',
                  plan.emphasis && 'text-brand',
                )}
              >
                {plan.price} <span className="text-base font-normal text-muted">/ month</span>
              </p>
              <p className="my-6 leading-relaxed text-body">{plan.description}</p>
              <ul role="list" className="mb-8 list-none space-y-2 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-body">
                    <span className="text-brand" aria-hidden="true">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <PillLink
                href="#contact-section"
                variant={plan.buttonClass === 'primary' ? 'primary' : 'secondary'}
              >
                Get started
              </PillLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
