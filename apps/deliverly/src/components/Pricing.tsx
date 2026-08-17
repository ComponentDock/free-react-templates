import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pricingPlans, pricingTitle } from '../data'

export function Pricing() {
  return (
    <section aria-label="Pricing" className="py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-[120px] text-center">
          <div aria-hidden="true" className="mx-auto mb-4 h-[2px] w-[50px] bg-brand" />
          <h2 className="font-serif text-[40px] font-bold text-ink">{pricingTitle}</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              role="group"
              aria-label={`${plan.name} plan`}
              className="flex flex-col rounded-[4px] border border-neutral-300 bg-white p-7 shadow-[0_0_5px_0_rgba(0,0,0,0.1)]"
            >
              <h3 className="font-serif text-lg font-bold text-ink">{plan.name}</h3>
              <span className="mt-2 block text-[30px] font-semibold text-brand">{plan.price}</span>
              <p className="mt-2 text-sm text-muted">{plan.description}</p>
              <ul className="mt-5 space-y-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className={cn(
                      'flex items-center gap-2 text-sm',
                      !feature.included && 'text-neutral-400',
                    )}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className={cn(
                        'h-5 w-5 shrink-0',
                        feature.included ? 'text-brand' : 'text-neutral-300',
                      )}
                    />
                    {feature.label}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto pt-6 font-semibold text-brand transition-colors hover:text-brand-hover"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
