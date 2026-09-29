import { Check, Shield } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  { price: '5', highlighted: false },
  { price: '20', highlighted: true },
  { price: '30', highlighted: false },
] as const

const features = [
  'Increase traffic 50%',
  'Social Media Marketing',
  '10 Free Optimization',
  '24/7 support',
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-primary-700 dark:text-gray-100">
            Choose Your Very Best Pricing Plan
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.price}
              className={`rounded-md p-10 text-center shadow-sm transition-shadow hover:shadow-md ${
                plan.highlighted ? 'bg-accent-400 text-white' : 'bg-mist dark:bg-gray-900'
              }`}
            >
              <span
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
                  plan.highlighted ? 'bg-white/20 text-white' : 'bg-accent-400/10 text-accent-400'
                }`}
              >
                <Shield className="h-7 w-7" aria-hidden="true" />
              </span>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span
                  className={`font-display text-5xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-primary-700'
                  }`}
                >
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/70' : 'text-muted'}`}>
                  / mo
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check
                      className={`h-4 w-4 shrink-0 ${
                        plan.highlighted ? 'text-white' : 'text-accent-400'
                      }`}
                      aria-hidden="true"
                    />
                    <span
                      className={
                        plan.highlighted ? 'text-white/90' : 'text-smoke dark:text-gray-300'
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={`mt-9 w-full rounded-md px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  plan.highlighted ? 'bg-white text-accent-400' : 'bg-accent-400 text-white'
                }`}
              >
                Get Started
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
