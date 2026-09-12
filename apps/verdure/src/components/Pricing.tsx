import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 29,
    features: [
      { name: 'Garden Service', included: true },
      { name: 'Forest Planning', included: true },
      { name: 'Garden Party', included: true },
      { name: 'Preparing Landscape', included: false },
      { name: 'Garden Fence', included: false },
    ],
  },
  {
    name: 'Standard',
    price: 59,
    features: [
      { name: 'Garden Service', included: true },
      { name: 'Forest Planning', included: true },
      { name: 'Garden Party', included: true },
      { name: 'Preparing Landscape', included: true },
      { name: 'Garden Fence', included: false },
    ],
  },
  {
    name: 'Premium',
    price: 99,
    features: [
      { name: 'Garden Service', included: true },
      { name: 'Forest Planning', included: true },
      { name: 'Garden Party', included: true },
      { name: 'Preparing Landscape', included: true },
      { name: 'Garden Fence', included: true },
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-verdure-400 text-sm uppercase tracking-widest font-medium">
            Pricing
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">Our Plans &amp; Pricing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-verdure-400">${plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.name} className="flex items-center gap-3 text-sm text-gray-700">
                    {f.included ? (
                      <Check className="w-5 h-5 text-verdure-400 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={f.included ? '' : 'text-gray-400'}>{f.name}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 border-2 border-verdure-400 text-verdure-400 hover:bg-verdure-400 hover:text-white font-semibold rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
