import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pricingTiers } from '../data'

/** "Upgrade to Pro" pricing: three tier cards, the middle one highlighted
 *  with a popular top border; each card has a feature list (struck-through
 *  unavailable items) and a gradient "Choose this Plan" button. */
export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-eyebrow">Pricing</p>
          <h2 className="mt-3 text-3xl font-medium text-brand-purple lg:text-4xl">
            Upgrade to Pro
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              aria-labelledby={`pricing-${tier.name}`}
              className={cn(
                'flex flex-col rounded-lg border border-[#f1eef1] bg-white p-8 text-center',
                tier.popular &&
                  'border-t-[3px] border-t-popular shadow-[0_12px_59px_rgba(36,7,31,0.11)]',
              )}
            >
              <h3
                id={`pricing-${tier.name}`}
                className="text-sm font-medium uppercase tracking-widest text-brand-purple"
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-5xl font-light text-brand-purple">
                {tier.price}
                <span className="text-lg text-muted">/m</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
                {tier.unavailable?.map((feature) => (
                  <li key={feature} className="text-[#d9d3d8] line-through">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-8 block rounded px-6 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-lg transition-opacity hover:opacity-90',
                  tier.popular
                    ? 'bg-gradient-to-r from-brand to-brand-2'
                    : 'bg-gradient-to-r from-brand to-brand-2 opacity-90',
                )}
              >
                Choose this Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
