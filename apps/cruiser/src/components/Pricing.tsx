import { Check } from 'lucide-react'

interface PricingProps {
  className?: string
}

interface PricingTier {
  name: string
  price: string
  period: string
  features: string[]
  featured?: boolean
}

const tiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: [
      'Access to online tutorials',
      'Community forum access',
      'Monthly group sessions',
      'Basic gear discounts',
    ],
  },
  {
    name: 'Premium',
    price: '$79',
    period: '/month',
    features: [
      'Everything in Basic',
      'Personal coaching 2x/month',
      'Video analysis',
      'Premium gear discounts',
      'Priority event access',
    ],
    featured: true,
  },
  {
    name: 'Professional',
    price: '$149',
    period: '/month',
    features: [
      'Everything in Premium',
      'Unlimited coaching',
      'Competition coaching',
      'Sponsored gear program',
      'VIP event access',
      '1-on-1 mentorship',
    ],
  },
]

export function Pricing({ className = '' }: PricingProps) {
  return (
    <section id="pricing" className={`py-20 bg-bg-dark ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-oswald text-3xl md:text-4xl font-bold uppercase tracking-wider text-white mb-3">
            Pricing Plans
          </h2>
          <div className="h-1 w-16 bg-brand mx-auto" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg p-8 text-center ${
                tier.featured
                  ? 'bg-brand text-white ring-4 ring-brand scale-105 shadow-xl'
                  : 'bg-surface'
              }`}
            >
              <h3 className="font-oswald text-2xl font-bold uppercase tracking-wider mb-4">
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold font-oswald">{tier.price}</span>
                <span className="text-sm opacity-80">{tier.period}</span>
              </div>
              <ul
                className={`space-y-3 mb-8 text-left ${tier.featured ? 'text-white' : 'text-gray-300'}`}
              >
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className={`flex-shrink-0 mt-0.5 ${tier.featured ? 'text-white' : 'text-brand'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-oswald font-semibold uppercase tracking-wider rounded transition-colors ${
                  tier.featured
                    ? 'bg-white text-brand hover:bg-gray-100'
                    : 'bg-brand text-white hover:bg-brand-light'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
