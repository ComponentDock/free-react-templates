import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Early Bird',
    price: '$65',
    features: [
      'Full conference access',
      'Workshop materials',
      'Lunch included',
      'Networking events',
    ],
    highlighted: true,
  },
  {
    name: 'Standard',
    price: '$85',
    features: [
      'Full conference access',
      'Workshop materials',
      'Lunch included',
      'Networking events',
      'VIP lounge',
    ],
    highlighted: false,
  },
  {
    name: 'Corporate',
    price: '$95',
    features: [
      'Full conference access',
      'Workshop materials',
      'Lunch included',
      'Networking events',
      'VIP lounge',
      'Private meeting rooms',
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#18181c] md:text-4xl">
          Pricing Table
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'flex flex-col rounded-lg p-8 text-center transition hover:shadow-lg',
                plan.highlighted
                  ? 'bg-[#f50136] text-white scale-105 shadow-xl'
                  : 'bg-white text-[#18181c]',
              )}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block self-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase text-[#f50136]">
                  Recommended
                </span>
              )}
              <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
              <p className="mb-6 text-4xl font-bold">{plan.price}</p>
              <ul className="mb-8 flex flex-1 flex-col gap-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check
                      size={16}
                      className={cn(
                        'flex-shrink-0',
                        plan.highlighted ? 'text-white' : 'text-[#f50136]',
                      )}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  'rounded-full px-6 py-2 text-sm font-semibold',
                  plan.highlighted
                    ? 'bg-white text-[#f50136] hover:bg-gray-100'
                    : 'bg-[#f50136] text-white hover:bg-[#d4002e]',
                )}
              >
                Purchase
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
