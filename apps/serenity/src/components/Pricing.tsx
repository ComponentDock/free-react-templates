import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  { name: 'Year Card', price: 449, period: 'For 1 Year' },
  { name: 'Monthly Card', price: 200, period: 'For 1 Month' },
  { name: 'Weekly Card', price: 85, period: 'For 1 Week' },
] as const

const features = [
  'Face Treatments',
  'Nail Treatments',
  'Medical Treatments',
  'Hair Removal',
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Pricing Tables
          </span>
          <h2 className="mt-3 text-3xl font-light text-ink dark:text-white sm:text-4xl">
            Pricing Treatments
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-mist dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col border border-line p-8 text-center transition-shadow hover:shadow-lg dark:border-gray-800"
            >
              <h3 className="text-xl font-semibold uppercase tracking-wide text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-5 font-display text-5xl text-brand">
                <sup aria-hidden="true" className="text-2xl">
                  $
                </sup>
                {plan.price}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-mist dark:text-white/50">
                {plan.period}
              </p>
              <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink dark:text-white">
                Enjoy All The Features
              </h4>
              <ul className="mt-5 flex-1 space-y-3 text-sm text-mist dark:text-white/60">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                variant="outline"
                className="mt-8 rounded-full border-brand/50 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand hover:bg-brand hover:text-white dark:border-brand/50 dark:text-brand"
              >
                Get Started
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
