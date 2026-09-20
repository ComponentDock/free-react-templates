import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export interface PricingProps {
  className?: string
}

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      '1 Day Conference',
      'Access to Main Hall',
      'Coffee Break',
      'Conference Kit',
      'Certificate',
    ],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: 49,
    features: [
      '2 Day Conference',
      'VIP Lounge Access',
      'Lunch Included',
      'Conference Kit',
      'Networking Event',
      'Certificate',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 79,
    features: [
      'All Day Conference',
      'VIP Lounge Access',
      'All Meals Included',
      'Conference Kit',
      'Networking Event',
      'Workshop Access',
      'Certificate',
    ],
    highlighted: false,
  },
]

export function Pricing({ className }: PricingProps) {
  return (
    <section id="pricing" className={`bg-white py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Pricing Plan
        </p>
        <h2
          className="mb-12 text-center text-3xl font-bold text-[#222] md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Choose Your Plan
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 text-center transition-shadow hover:shadow-lg ${
                plan.highlighted ? 'bg-[#ff2d9b] text-white shadow-xl' : 'bg-[#f8f9fa] text-[#333]'
              }`}
              data-testid="pricing-card"
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[#ff2d9b] shadow">
                  Popular
                </span>
              )}
              <h3 className="mb-4 text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  ${plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                  /month
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      size={16}
                      className={plan.highlighted ? 'text-white' : 'text-[#ff2d9b]'}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlighted
                    ? 'bg-white text-[#ff2d9b] hover:bg-gray-100'
                    : 'bg-[#ff2d9b] text-white hover:bg-[#e6288c]'
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
