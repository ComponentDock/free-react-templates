import { Check } from 'lucide-react'
import { PRICING_PLANS } from '../data'
import { cn } from '@free-react-templates/ui'

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink md:text-4xl">Pricing</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Choose the plan that best fits your child&apos;s needs and your family&apos;s budget.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-lg border p-8 text-center shadow-sm transition-shadow hover:shadow-md',
                index === 1
                  ? 'border-brand bg-brand/5 ring-2 ring-brand'
                  : 'border-gray-100 bg-paper',
              )}
            >
              <h3 className="mb-2 text-xl font-bold text-ink">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-brand">{plan.price}</span>
                <span className="text-mist">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-ink">
                    <Check className="h-4 w-4 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'block rounded-full py-3 text-sm font-semibold transition-colors',
                  index === 1
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
                )}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
