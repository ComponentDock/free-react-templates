import { cn } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: ['2 Classes per week', 'Access to gym', 'Locker room', 'Basic support'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$59',
    period: '/month',
    features: [
      'Unlimited classes',
      'Access to gym',
      'Locker room',
      'Priority support',
      'Guest passes (2)',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    features: [
      'Unlimited classes',
      'Access to gym & spa',
      'Locker room',
      '24/7 support',
      'Guest passes (5)',
      'Personal trainer',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">Yoga Pricing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                'rounded-lg p-8 text-center',
                tier.highlighted
                  ? 'bg-soulflow-teal text-white shadow-lg scale-105'
                  : 'bg-white shadow-sm',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-bold mb-2',
                  tier.highlighted ? 'text-white' : 'text-gray-900',
                )}
              >
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span
                  className={cn('text-sm', tier.highlighted ? 'text-white/80' : 'text-gray-500')}
                >
                  {tier.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check
                      className={cn(
                        'w-5 h-5 shrink-0',
                        tier.highlighted ? 'text-white' : 'text-soulflow-teal',
                      )}
                    />
                    <span
                      className={cn(
                        'text-sm',
                        tier.highlighted ? 'text-white/90' : 'text-gray-600',
                      )}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  'w-full py-3 rounded-full font-medium transition-colors',
                  tier.highlighted
                    ? 'bg-white text-soulflow-teal hover:bg-gray-100'
                    : 'bg-soulflow-teal text-white hover:bg-teal-400',
                )}
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
