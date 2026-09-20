import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Small Team',
    price: 200,
    period: '/ person',
    features: ['1 Day Conference', 'Workshop Access', 'Lunch Included', 'Conference Materials'],
    featured: false,
  },
  {
    name: 'Family Pack',
    price: 499,
    period: '/ person',
    features: [
      'All 4 Days',
      'All Workshops',
      'VIP Lounge Access',
      'Meals & Refreshments',
      'Conference Materials',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 999,
    period: '/ person',
    features: [
      'All 4 Days',
      'All Workshops',
      'VIP Lounge Access',
      'Private Meeting Room',
      'Speaker Dinner Access',
      'Conference Materials',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-2 text-center text-sm font-light uppercase tracking-widest text-gray-400">
          Pricing
        </h2>
        <h3 className="mb-12 text-center text-3xl font-bold text-charcoal">Ticket Pricing</h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-sm p-8 text-center ${
                plan.featured
                  ? 'border-2 border-brand bg-white shadow-lg'
                  : 'border border-gray-200 bg-white'
              }`}
            >
              {plan.featured && (
                <span className="mb-4 inline-block rounded-sm bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
                  Most Popular
                </span>
              )}
              <h4 className="text-lg font-semibold text-charcoal">{plan.name}</h4>
              <div className="my-4">
                <span className="text-4xl font-extrabold text-charcoal">${plan.price}</span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-body">
                    <Check size={16} className="shrink-0 text-brand" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block w-full rounded-sm px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-opacity hover:opacity-90 ${
                  plan.featured
                    ? 'bg-brand text-white'
                    : 'border border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                Buy Ticket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
