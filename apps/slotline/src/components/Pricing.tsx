import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { pricing } from '../content'
import { SectionHeading, containerClass } from './ui'

/**
 * The only band with a switch and the only centred **sans** heading: the
 * four bands above are Fraunces and left-aligned, these two are Inter and
 * centred, and that split is the design.
 */
export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-28 bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading kicker={pricing.kicker} title={pricing.title} lede={pricing.lede} tone="lavender" align="center" serif={false} />

        <div className="mt-10 flex items-center justify-center gap-4">
          <span className={cn('text-sm leading-5 font-medium', yearly ? 'text-gray-500' : 'text-gray-900')}>
            {pricing.monthlyLabel}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label={pricing.switchLabel}
            onClick={() => setYearly((current) => !current)}
            className={cn(
              'relative h-7 w-14 rounded-full transition-colors duration-150',
              yearly ? 'bg-primary-600' : 'bg-gray-200',
            )}
          >
            <span
              className={cn(
                'absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-150',
                yearly && 'translate-x-7',
              )}
            />
          </button>
          <span className={cn('text-sm leading-5 font-medium', yearly ? 'text-gray-900' : 'text-gray-500')}>
            {pricing.yearlyLabel}
          </span>
          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs leading-4 font-semibold text-green-700">
            {pricing.save}
          </span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-2xl p-8 shadow-soft transition-shadow hover:shadow-soft-lg',
                plan.featured === true ? 'bg-white ring-2 ring-primary-600' : 'bg-gray-50',
              )}
            >
              {plan.featured === true ? (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm leading-5 font-medium whitespace-nowrap text-white">
                  {pricing.popular}
                </span>
              ) : null}
              <h3 className="text-xl leading-7 font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-sm leading-5 text-gray-600">{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl leading-none font-bold text-gray-900 tabular-nums">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm leading-5 text-gray-500">/month</span>
              </p>
              <p className="mt-2 text-xs leading-5 text-gray-500">
                {yearly ? `Billed annually ($${plan.yearly * 12}/year)` : pricing.monthlyNote}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-2 text-sm leading-5">
                    {feature.included ? (
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
                    ) : (
                      <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.label}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-8 block rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors',
                  plan.featured === true
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
