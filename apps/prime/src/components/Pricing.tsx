import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { plans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-2 block text-sm text-brand">Pricing Plans</span>
          <h2 className="text-3xl font-normal text-ink">Our Best Pricing</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'flex flex-col bg-white p-7 shadow-[0_2px_5px_rgba(0,0,0,0.03)]',
                plan.highlighted && 'border-t-2 border-brand',
              )}
            >
              <h3 className="mb-1 text-sm font-semibold tracking-wide text-ink uppercase">
                {plan.name}
              </h3>
              <p className="mb-4 text-4xl font-light text-ink">
                {plan.price}
                <span className="text-sm text-muted">/month</span>
              </p>
              <p className="mb-4 text-sm text-muted">{plan.note}</p>
              <ul className="mb-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2 text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature.label}
                  </li>
                ))}
              </ul>
              <div className="mt-auto space-y-2">
                <a
                  href="#quote"
                  className={cn(
                    'block rounded-none py-3 text-center text-sm transition-colors',
                    plan.highlighted
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'border border-btn text-btn hover:bg-btn hover:text-ink',
                  )}
                >
                  Get Started
                </a>
                <a
                  href="#quote"
                  className="block py-2 text-center text-sm text-muted transition-colors hover:text-brand"
                >
                  Enjoy All The Features
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
