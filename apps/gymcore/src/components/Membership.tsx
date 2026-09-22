import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: 17,
    features: [
      { label: 'Duration', value: '12 months' },
      { label: 'Personal trainer', value: '00 person' },
      { label: 'Amount of people', value: '01 person' },
      { label: 'Number of visits', value: 'Unlimited' },
    ],
  },
  {
    name: 'Standard',
    price: 57,
    features: [
      { label: 'Duration', value: '12 months' },
      { label: 'Personal trainer', value: '01 person' },
      { label: 'Amount of people', value: '01 person' },
      { label: 'Number of visits', value: 'Unlimited' },
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 98,
    features: [
      { label: 'Duration', value: '12 months' },
      { label: 'Personal trainer', value: '01 person' },
      { label: 'Amount of people', value: '01 person' },
      { label: 'Number of visits', value: 'Unlimited' },
    ],
  },
]

export function Membership() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-semibold uppercase text-ink md:text-4xl">
          Membership Plans
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-center shadow-md ${
                plan.highlighted ? 'bg-brand text-white' : 'bg-white text-ink'
              }`}
            >
              <h4 className="mb-2 text-xl font-semibold">{plan.name}</h4>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm opacity-75">/01 mo</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center justify-between text-sm">
                    <span className={plan.highlighted ? 'text-white/80' : 'text-mist'}>
                      {f.label}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Check className="h-4 w-4 text-brand" />
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full rounded-full py-2 text-sm font-semibold">
                Start Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
