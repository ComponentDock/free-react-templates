import { Check, X } from 'lucide-react'

interface Plan {
  name: string
  price: string
  description: string
  features: { label: string; included: boolean }[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Normal',
    price: '45.00',
    description: 'Perfect for small teams getting started',
    features: [
      { label: 'Unlimited Entrance', included: true },
      { label: 'Comfortable Seat', included: true },
      { label: 'Paid Certificate', included: true },
      { label: 'Day One Workshop', included: false },
      { label: 'One Certificate', included: false },
    ],
  },
  {
    name: 'Advanced',
    price: '55.00',
    description: 'Best for growing businesses',
    features: [
      { label: 'Unlimited Entrance', included: true },
      { label: 'Comfortable Seat', included: true },
      { label: 'Paid Certificate', included: true },
      { label: 'Day One Workshop', included: false },
      { label: 'One Certificate', included: false },
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '65.00',
    description: 'For teams that need everything',
    features: [
      { label: 'Unlimited Entrance', included: true },
      { label: 'Comfortable Seat', included: true },
      { label: 'Paid Certificate', included: true },
      { label: 'Day One Workshop', included: false },
      { label: 'One Certificate', included: false },
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="my-16 sm:my-24 lg:my-32" data-testid="pricing">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section intro */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-20">
          <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-3 text-base text-body">
            Flexible pricing that scales with your team. Start free, upgrade when you&apos;re ready.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border bg-magnolia text-center transition-shadow hover:shadow-xl ${
                plan.popular ? 'border-primary shadow-lg' : 'border-transparent'
              }`}
            >
              <div className="border-b border-border px-6 py-10">
                <h4 className="font-display text-2xl font-bold text-heading">{plan.name}</h4>
                <p className="mt-1 text-sm text-body">{plan.description}</p>
                <div className="mt-5">
                  <span className="text-sm align-top">$</span>
                  <span className="font-sans text-5xl font-bold text-heading">{plan.price}</span>
                </div>
              </div>
              <ul className="px-6 py-8">
                {plan.features.map((f) => (
                  <li
                    key={f.label}
                    className="mb-3 flex items-center justify-center gap-2 text-sm text-body"
                  >
                    {f.included ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )}
                    <span className={f.included ? '' : 'text-gray-400'}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 pb-10">
                <button className="w-full rounded-full border-2 border-primary py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
