import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/month',
    features: ['Initial Consultation', 'Email Support', 'Resource Library', 'Monthly Check-in'],
    featured: false,
  },
  {
    name: 'Standard',
    price: '$99',
    period: '/month',
    features: [
      'Everything in Basic',
      'Weekly Sessions',
      'Priority Support',
      'Legal Assistance',
      'Crisis Support',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '$149',
    period: '/month',
    features: [
      'Everything in Standard',
      'Unlimited Sessions',
      '24/7 Support',
      'Full Legal Services',
      'Family Therapy',
      'Personalized Plan',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">Pricing Plans</h2>
          <p className="mt-4 text-gray-600">Choose the plan that fits your needs</p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-xl',
                plan.featured && 'ring-2 ring-[#589167]',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#589167] px-4 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              )}

              <h3 className="mb-2 text-xl font-semibold text-[#1a1a1a]">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#1a1a1a]">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check className="h-5 w-5 flex-shrink-0 text-[#589167]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={cn(
                  'w-full rounded-md py-3 text-sm font-semibold transition-colors',
                  plan.featured
                    ? 'bg-[#589167] text-white hover:bg-[#4a7a59]'
                    : 'border border-[#589167] text-[#589167] hover:bg-[#589167] hover:text-white',
                )}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
