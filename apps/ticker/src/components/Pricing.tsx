import { Check } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to get started with the basics.',
    features: [
      'Access to free course previews',
      'Daily market analysis newsletter',
      'Community Discord access',
      'Basic trading tools',
    ],
    featured: false,
    cta: 'Get Started',
  },
  {
    name: 'Trader',
    price: '$79',
    period: 'per month',
    description: 'The complete education for serious retail traders.',
    features: [
      'All courses included',
      'Live trading room access',
      'Real-time trade alerts',
      'Weekly mentor Q&A sessions',
      'Advanced risk management tools',
    ],
    featured: true,
    cta: 'Start Trading',
  },
  {
    name: 'Elite',
    price: '$149',
    period: 'per month',
    description: 'Everything in Trader plus hands-on mentorship.',
    features: [
      'Everything in Trader',
      '1-on-1 mentor coaching calls',
      'Personalized trade reviews',
      'Private elite trader community',
    ],
    featured: false,
    cta: 'Go Elite',
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Invest in Your Trading Future
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Start free, upgrade when you are ready. Cancel anytime — no lock-in contracts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-xl border p-8',
                plan.featured
                  ? 'border-primary-500 bg-white shadow-xl ring-1 ring-primary-500/20 dark:border-primary-600 dark:bg-gray-900'
                  : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{plan.description}</p>
              <p className="mt-5">
                <span className="font-display text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400"> / {plan.period}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <Check
                      className={cn(
                        'mt-0.5 h-4 w-4 flex-shrink-0',
                        plan.featured
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-success-500',
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#pricing"
                className={cn(
                  'mt-8 w-full',
                  plan.featured
                    ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white'
                    : 'border border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-900',
                )}
              >
                {plan.cta}
              </ButtonLink>
            </div>
          ))}

          <div className="flex flex-col rounded-xl border border-dashed border-gray-300 bg-gray-100/50 p-8 dark:border-gray-700 dark:bg-gray-900/50">
            <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
              Need a Custom Solution?
            </h3>
            <p className="mt-3 flex-1 text-sm text-gray-600 dark:text-gray-400">
              Running a fund, a prop firm, or a trading academy? We build private curricula,
              compliance-ready trackers, and team licensing.
            </p>
            <ButtonLink
              href="#faq"
              variant="outline"
              className="mt-8 w-full bg-white dark:bg-gray-900 dark:hover:bg-gray-900"
            >
              Contact Sales
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
