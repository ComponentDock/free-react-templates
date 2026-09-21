import { Check, X } from 'lucide-react'

interface PricingPlan {
  name: string
  description: string
  price: string
  features: { label: string; included: boolean }[]
}

const PLANS: PricingPlan[] = [
  {
    name: 'Wedding',
    description: 'Perfect for intimate ceremonies',
    price: '76',
    features: [
      { label: 'Unlimited Entrance', included: true },
      { label: 'Comfortable Seat', included: true },
      { label: 'Paid Certificate', included: true },
      { label: 'Day One Workshop', included: false },
      { label: 'One Certificate', included: false },
    ],
  },
  {
    name: 'Studio',
    description: 'For professional studio sessions',
    price: '86',
    features: [
      { label: 'Unlimited Entrance', included: true },
      { label: 'Comfortable Seat', included: true },
      { label: 'Paid Certificate', included: true },
      { label: 'Day One Workshop', included: false },
      { label: 'One Certificate', included: false },
    ],
  },
  {
    name: 'Fashion',
    description: 'Full fashion photography package',
    price: '96',
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
    <section id="pricing" className="bg-muted py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h3 className="font-heading text-3xl font-bold text-heading">
            Perfect <span className="text-brand">Price</span> Plan
          </h3>
          <p className="mt-2 font-body text-body-text">
            Choose the plan that fits your photography needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="font-heading text-2xl font-bold text-heading">{plan.name}</h3>
              <p className="mt-1 font-body text-sm text-body-text">{plan.description}</p>
              <div className="my-6">
                <span className="font-heading text-4xl font-bold text-brand">${plan.price}</span>
                <span className="font-body text-body-text">.00</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.label}
                    className="flex items-center justify-center gap-2 font-body text-sm"
                  >
                    {feature.included ? (
                      <Check className="h-4 w-4 text-brand" />
                    ) : (
                      <X className="h-4 w-4 text-gray-400" />
                    )}
                    <span className={feature.included ? 'text-heading' : 'text-gray-400'}>
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block rounded bg-brand px-8 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-brand-dark"
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
