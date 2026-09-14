import { Check } from 'lucide-react'

interface PlanFeature {
  text: string
}

interface PricingPlan {
  name: string
  audience: string
  price: string
  description: string
  features: PlanFeature[]
  highlighted?: boolean
}

const plans: PricingPlan[] = [
  {
    name: 'Standard',
    audience: 'For individuals',
    price: '$199',
    description: 'Perfect for solo founders and freelancers who need a solid foundation.',
    features: [
      { text: '2.5 GB Free Photos' },
      { text: 'Secure Online Transfer' },
      { text: 'Unlimited Styles for Interface' },
      { text: 'Reliable Customer Service' },
      { text: 'Manual Backup Provided' },
    ],
  },
  {
    name: 'Business',
    audience: 'For small companies',
    price: '$399',
    description: 'Designed for growing teams that need collaboration and analytics.',
    features: [
      { text: '10 GB Free Photos' },
      { text: 'Secure Online Transfer' },
      { text: 'Unlimited Styles for Interface' },
      { text: 'Priority Customer Service' },
      { text: 'Automatic Backup Provided' },
    ],
    highlighted: true,
  },
  {
    name: 'Ultimate',
    audience: 'For large companies',
    price: '$499',
    description: 'Enterprise-grade features with dedicated support and custom integrations.',
    features: [
      { text: 'Unlimited Storage' },
      { text: 'Secure Online Transfer' },
      { text: 'Unlimited Styles for Interface' },
      { text: 'Dedicated Customer Manager' },
      { text: 'Real-time Backup Provided' },
    ],
  },
]

export function Pricing() {
  return (
    <section id="price" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Choose the Perfect Plan for you</h2>
          <p className="mt-2 text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border bg-white p-8 shadow-sm transition hover:shadow-md ${
                plan.highlighted ? 'border-brand-600 ring-2 ring-brand-100' : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{plan.audience}</p>
                </div>
                <span className="text-2xl font-bold text-brand-600">{plan.price}</span>
              </div>
              <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 shrink-0 text-brand-600" />
                    {f.text}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-brand-600 text-brand-600 hover:bg-brand-50'
                }`}
              >
                Purchase Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
