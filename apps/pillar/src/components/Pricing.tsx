import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/year',
    note: 'Billed annually or $10 per month',
    features: [
      'Max 5 users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/year',
    note: 'Billed annually or $30 per month',
    features: [
      'Max 10 users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    period: '/year',
    note: 'Billed annually or $10 per month',
    features: [
      'Unlimited users',
      '29 local security',
      'Desktop App',
      'Email Support',
      'Phone Support 24/7',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-accent">
            Choose Your Plan
          </h4>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Pricing</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi.
            Magni deserunt necessitatibus perferendis.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded border p-8 text-center',
                plan.featured && 'border-accent shadow-lg',
              )}
            >
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <p className="mb-6 text-xs text-gray-400">{plan.note}</p>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'inline-block w-full rounded py-3 text-sm font-semibold transition-colors',
                  plan.featured
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
                )}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
