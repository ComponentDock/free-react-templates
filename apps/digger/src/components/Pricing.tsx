import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: 47,
    features: [
      'Basic Project Consultation',
      'Standard Equipment',
      'Email Support',
      'Monthly Reports',
    ],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: 200,
    features: [
      'Advanced Consultation',
      'Premium Equipment',
      '24/7 Priority Support',
      'Weekly Reports',
      'Dedicated Manager',
    ],
    highlighted: true,
  },
  {
    name: 'Professional',
    price: 750,
    features: [
      'Full Service Package',
      'Top-tier Equipment',
      'Dedicated Team',
      'Real-time Dashboard',
      'Custom Solutions',
      'On-site Support',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-light-bg">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-lg p-8 text-center',
                plan.highlighted ? 'bg-brand text-white shadow-lg scale-105' : 'bg-white shadow-sm',
              )}
            >
              <h3
                className={cn(
                  'text-xl font-bold font-heading mb-2',
                  plan.highlighted ? 'text-white' : 'text-heading',
                )}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold font-heading">${plan.price}</span>
                <span className={cn('text-sm', plan.highlighted ? 'text-white/70' : 'text-body')}>
                  {' '}
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check
                      size={16}
                      className={
                        plan.highlighted
                          ? 'text-white flex-shrink-0'
                          : 'text-green-accent flex-shrink-0'
                      }
                    />
                    <span
                      className={cn('text-sm', plan.highlighted ? 'text-white/90' : 'text-body')}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  'w-full py-3 rounded font-semibold text-sm uppercase tracking-wider transition-colors',
                  plan.highlighted
                    ? 'bg-white text-brand hover:bg-gray-100'
                    : 'bg-brand text-white hover:bg-brand-dark',
                )}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
