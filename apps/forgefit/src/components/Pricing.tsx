import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    tagline: 'Great for getting started',
    monthly: 29,
    yearly: 276,
    features: [
      'Full gym access',
      'Locker room & showers',
      'Basic equipment',
      '2 group classes/week',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Most popular for serious athletes',
    monthly: 59,
    yearly: 564,
    popular: true,
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'All equipment & zones',
      '1 PT session/month',
      'Sauna & steam room',
      'IronForge app access',
    ],
  },
  {
    name: 'Elite',
    tagline: 'The ultimate fitness experience',
    monthly: 99,
    yearly: 948,
    features: [
      'Everything in Pro',
      'Unlimited PT sessions',
      'Custom nutrition plan',
      'Priority class booking',
      '2 guest passes/month',
      'Recovery zone access',
    ],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-widest text-primary-600 dark:text-primary-400">
          Membership
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
          Choose Your Plan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
          Flexible membership options to match your fitness journey. All plans include a 7-day free
          trial.
        </p>

        {/* Billing toggle */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span
            className={cn(
              'text-sm font-semibold',
              !yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle annual billing"
            onClick={() => setYearly((value) => !value)}
            className={cn(
              'relative h-7 w-14 rounded-full transition-colors',
              yearly ? 'bg-primary-600' : 'bg-gray-300 dark:bg-gray-700',
            )}
          >
            <span
              className={cn(
                'absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all',
                yearly ? 'left-8' : 'left-1',
              )}
              aria-hidden="true"
            />
          </button>
          <span
            className={cn(
              'text-sm font-semibold',
              yearly ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
            )}
          >
            Yearly
          </span>
          <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-400">
            Save 20%
          </span>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8',
                plan.popular
                  ? 'border-primary-600 bg-gray-950 text-white shadow-xl shadow-primary-600/20 dark:border-primary-500'
                  : 'border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-gray-900',
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              <p
                className={cn(
                  'mt-1 text-sm',
                  plan.popular ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400',
                )}
              >
                {plan.tagline}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold">${plan.monthly}</span>
                <span
                  className={cn(
                    'text-sm font-medium',
                    plan.popular ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400',
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={cn(
                  'mt-2 text-xs font-medium',
                  plan.popular ? 'text-gray-400' : 'text-gray-500 dark:text-gray-400',
                )}
              >
                {yearly ? `Billed annually ($${plan.yearly}/year)` : 'Billed monthly'}
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        'mt-0.5 h-5 w-5 shrink-0',
                        plan.popular
                          ? 'text-primary-400'
                          : 'text-primary-600 dark:text-primary-400',
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={cn(
                        'text-sm',
                        plan.popular ? 'text-gray-300' : 'text-gray-600 dark:text-gray-300',
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={cn(
                  'mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition-colors',
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-white text-gray-900 ring-1 ring-gray-200 hover:bg-gray-100 dark:bg-gray-950 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800',
                )}
              >
                Start Free Trial
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
