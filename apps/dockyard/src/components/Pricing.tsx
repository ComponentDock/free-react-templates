import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pricing } from '../data'

/** Three tiers: the included features carry a green tick, the excluded ones are muted and struck. */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-surface py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">Pricing</h2>
          <p className="mt-4 text-[16px] text-body">
            Annual plans priced on the number of consignments the desk keeps open for you.
          </p>
        </div>

        <ul className="grid gap-[30px] lg:grid-cols-3">
          {pricing.map((tier) => (
            <li key={tier.name} className="bg-white p-[30px]">
              <h3 className="text-[28px] font-medium text-ink uppercase">{tier.name}</h3>
              <p className="mt-4 text-center">
                <span className="text-[48px] leading-none text-brand">${tier.price}</span>
                <span className="text-[16px] text-price-suffix"> / year</span>
              </p>

              <ul className="mt-8 space-y-5">
                {tier.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={cn(
                      'flex items-start gap-3 text-[16px]',
                      feature.included ? 'text-body' : 'text-muted line-through',
                    )}
                  >
                    {feature.included ? (
                      <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-success" />
                    ) : (
                      <X aria-hidden="true" className="mt-1 size-5 shrink-0 text-muted" />
                    )}
                    {feature.label}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  'mt-8 inline-flex rounded-[4px] border border-transparent px-5 py-2 text-[16px] text-white transition-colors',
                  tier.featured
                    ? 'bg-brand hover:bg-brand-dark'
                    : 'bg-secondary hover:bg-secondary-dark',
                )}
              >
                Buy Now
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
