import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Starter',
    price: 49,
    period: '/mo',
    features: ['5 Projects', '10 GB Storage', 'Basic Analytics', 'Email Support', '1 User'],
    popular: false,
  },
  {
    name: 'Professional',
    price: 99,
    period: '/mo',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Advanced Analytics',
      'Priority Support',
      '10 Users',
      'Custom Domain',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    period: '/mo',
    features: [
      'Unlimited Everything',
      '1 TB Storage',
      'Custom Analytics',
      '24/7 Support',
      'Unlimited Users',
      'White Label',
      'API Access',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-navy-700 sm:text-4xl">
          Find Plan that is Right for You
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-500">
          Choose the plan that fits your needs. All plans include a 14-day free trial.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-lg border p-8 text-center transition-shadow hover:shadow-lg',
                plan.popular ? 'border-pulse-400 shadow-md' : 'border-gray-200',
              )}
            >
              {plan.popular && (
                <span className="mb-4 inline-block rounded-full bg-pulse-400 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-navy-700">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-navy-700">${plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center justify-center gap-2 text-sm text-gray-600"
                  >
                    <Check className="h-4 w-4 text-pulse-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={cn(
                  'mt-8 w-full rounded-full py-3 text-sm font-semibold transition-colors',
                  plan.popular
                    ? 'bg-pulse-400 text-white hover:bg-pulse-500'
                    : 'border border-pulse-400 text-pulse-400 hover:bg-pulse-400 hover:text-white',
                )}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
