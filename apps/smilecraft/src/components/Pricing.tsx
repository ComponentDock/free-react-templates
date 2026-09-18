import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$49',
    features: ['1 Cleaning', 'X-Rays', 'Basic Exam', 'Consultation'],
    featured: false,
  },
  {
    name: 'Standard',
    price: '$99',
    features: [
      '2 Cleanings',
      'Full X-Rays',
      'Comprehensive Exam',
      'Fluoride Treatment',
      'Consultation',
    ],
    featured: false,
  },
  {
    name: 'Premium',
    price: '$199',
    features: [
      '4 Cleanings',
      'Digital X-Rays',
      'Full Exam',
      'Whitening Kit',
      'Emergency Coverage',
      'Consultation',
    ],
    featured: true,
  },
  {
    name: 'Platinum',
    price: '$299',
    features: [
      'Unlimited Cleanings',
      'Advanced Imaging',
      'Priority Scheduling',
      'Cosmetic Discount',
      '24/7 Emergency',
      'Consultation',
    ],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-light-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Affordable Pricing Plans</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">
            Choose the plan that fits your dental care needs and budget.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border bg-white p-8 text-center shadow-sm ${
                plan.featured ? 'border-transparent ring-2 ring-price-blue' : 'border-gray-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-price-blue to-price-teal px-4 py-1 text-xs font-bold text-white">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-price-blue">{plan.price}</p>
              <p className="mt-1 text-xs text-body">per month</p>
              <ul className="mt-6 space-y-3 text-left text-sm text-body">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-price-blue" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded py-2 text-sm font-bold transition-colors ${
                  plan.featured
                    ? 'bg-gradient-to-r from-price-blue to-price-teal text-white hover:opacity-90'
                    : 'border border-price-blue text-price-blue hover:bg-price-blue hover:text-white'
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
