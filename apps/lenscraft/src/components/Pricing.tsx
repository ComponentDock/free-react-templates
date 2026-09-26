import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Wedding',
    description: 'Attend only first day',
    price: '$46.00',
    features: [
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: false },
      { text: 'Unlimited Entrance', included: false },
    ],
  },
  {
    name: 'Studio',
    description: 'Attend only first day',
    price: '$76.00',
    features: [
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: false },
      { text: 'Unlimited Entrance', included: false },
    ],
  },
  {
    name: 'Fashion',
    description: 'Attend only first day',
    price: '$96.00',
    features: [
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: true },
      { text: 'Unlimited Entrance', included: false },
      { text: 'Unlimited Entrance', included: false },
    ],
  },
]

export function Pricing() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-[var(--font-heading)] text-lg font-light uppercase tracking-widest text-coral-400">
            Pricing Plan
          </h3>
          <h2 className="font-[var(--font-heading)] mt-2 text-3xl font-semibold text-gray-900">
            Choose Your Package
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-white p-8 shadow-sm text-center">
              <h3 className="font-[var(--font-heading)] text-xl font-medium text-gray-900">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              <p className="font-[var(--font-heading)] mt-4 text-4xl font-bold text-gray-900">
                {plan.price}
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    {f.included ? (
                      <Check size={16} className="text-coral-400" />
                    ) : (
                      <X size={16} className="text-gray-300" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-coral-400 px-8 text-sm font-medium text-gray-900 transition-colors hover:bg-coral-400 hover:text-white"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
