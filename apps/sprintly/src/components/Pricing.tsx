import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: 29,
    period: '/month',
    features: [
      'Access to gym floor',
      'Locker room',
      '2 group classes/week',
      'Basic fitness assessment',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 59,
    period: '/month',
    features: [
      'Full gym access',
      'All group classes',
      '1 PT session/week',
      'Sauna & spa',
      'Nutrition plan',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 99,
    period: '/month',
    features: [
      'Everything in Pro',
      'Unlimited PT sessions',
      'Custom meal plan',
      'Priority booking',
      'Guest passes',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-dark-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
            Pricing
          </span>
          <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
            Choose Your Plan
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map(({ name, price, period, features, highlighted }) => (
            <div
              key={name}
              className={`rounded-lg p-8 ${
                highlighted
                  ? 'border-2 border-brand-500 bg-dark-700'
                  : 'border border-dark-600 bg-dark-700'
              }`}
            >
              {highlighted && (
                <span className="mb-4 inline-block rounded bg-brand-500 px-3 py-1 text-xs font-bold uppercase text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-semibold uppercase text-white">{name}</h3>
              <div className="mt-4">
                <span className="font-heading text-5xl font-bold text-white">${price}</span>
                <span className="text-dark-300">{period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-dark-200">
                    <Check className="h-4 w-4 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`mt-8 w-full rounded font-heading text-sm font-semibold uppercase tracking-wider ${
                  highlighted
                    ? 'bg-brand-500 text-white hover:bg-brand-600'
                    : 'border border-brand-500 bg-transparent text-brand-500 hover:bg-brand-500 hover:text-white'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
