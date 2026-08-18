import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { plans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-2 block text-[13px] font-bold uppercase tracking-wide text-brand">
            My Pricing
          </span>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">
            Flexible <span className="text-brand">Packages</span>
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            Choose a plan that fits your project scope. All packages include direct communication
            and revision rounds.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative rounded-lg bg-paper p-10 text-center shadow-[0_24px_48px_-13px_rgba(0,0,0,0.08)]',
                plan.highlighted && 'border-t-4 border-brand',
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <span className="mb-6 block text-sm font-semibold uppercase tracking-[1px] text-ink">
                {plan.name}
              </span>
              <p className="mb-1 text-ink">
                <sup className="text-2xl text-brand">$</sup>
                <span className="text-5xl font-semibold text-brand">{plan.price}</span>
              </p>
              <p className="mb-8 text-sm text-body">per project</p>

              <ul className="mb-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center justify-center gap-2">
                    {feature.included ? (
                      <Check aria-hidden="true" className="size-4 text-brand" />
                    ) : (
                      <X aria-hidden="true" className="size-4 text-body/60" />
                    )}
                    <span className={feature.included ? 'text-ink' : 'text-body/70'}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contactme"
                className={cn(
                  'mx-auto block w-3/5 rounded border py-3 text-sm font-semibold uppercase tracking-[1px] transition-colors',
                  plan.highlighted
                    ? 'border-brand bg-brand text-white hover:bg-transparent hover:text-brand'
                    : 'border-brand text-brand hover:bg-brand hover:text-white',
                )}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
