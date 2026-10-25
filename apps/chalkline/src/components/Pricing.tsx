import { Check, X } from 'lucide-react'
import { plans } from '../data'
import type { Plan } from '../data'
import { SCROLL_OFFSET, sectionChip } from '../lib/site'

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <li
      className={
        plan.featured
          ? 'relative flex flex-col rounded-2xl bg-white p-8 ring-2 ring-primary-600'
          : 'relative flex flex-col rounded-2xl bg-gray-50 p-8'
      }
    >
      {plan.featured ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-3 py-1 font-mono text-xs font-medium text-white">
          Most chosen
        </span>
      ) : null}

      <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{plan.blurb}</p>

      <p className="mt-6 flex items-baseline gap-2">
        <span className="text-5xl font-semibold tracking-tight text-gray-900">{plan.price}</span>
        <span className="font-mono text-sm text-gray-600">{plan.unit}</span>
      </p>
      <p className="mt-3 text-sm text-gray-500">{plan.note}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex gap-2.5 text-sm">
            {feature.included ? (
              <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
            ) : (
              <X aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
              {feature.label}
              {feature.included ? null : <span className="sr-only"> (not included)</span>}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={
          plan.featured
            ? 'mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700'
            : 'mt-8 inline-flex items-center justify-center rounded-lg bg-gray-200 px-5 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-300'
        }
      >
        {plan.cta}
      </a>
    </li>
  )
}

/** Three tiers, one ribboned middle card, and feature lists that flex to the
 * same height whatever their length. */
export function Pricing() {
  return (
    <section id="pricing" className={`section-band bg-white ${SCROLL_OFFSET}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className={`${sectionChip} rounded-full text-primary-700`}>Pricing</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">
            Priced per learner, per year, and that is the whole formula
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No modules to unlock, no separate charge for the API, no per-integration fee.
            Self-hosting is free forever because the licence says so, not because we are being
            generous.
          </p>
        </div>

        <ul className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </ul>
      </div>
    </section>
  )
}
