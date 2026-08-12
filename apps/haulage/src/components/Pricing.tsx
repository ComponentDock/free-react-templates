import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { PRICING } from '../data'
import { SectionHeading } from './SectionHeading'

/* Pricing — three white cards (30px padding): Oswald uppercase plan name,
   3rem orange price with a #cccccc suffix label, four orange-checkmark
   features, and an orange "Buy Now" button. */
export function Pricing() {
  return (
    <section id="pricing" className="bg-light py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Pricing"
          blurb="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {PRICING.map((plan) => (
            <article key={plan.plan} className="rounded bg-white p-[30px] text-center">
              <h3 className="font-display text-xl font-medium uppercase text-ink">{plan.plan}</h3>
              <p className="mt-4 text-cc">
                <span className="font-display text-5xl font-medium text-brand">{plan.price}</span>
                <span>{plan.label}</span>
              </p>
              <ul className="mt-6 space-y-5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2 text-smoke">
                    <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-8 inline-flex rounded border border-brand bg-brand px-5 py-2 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Buy Now
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
