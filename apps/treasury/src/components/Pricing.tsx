import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '49',
    features: ['1 User Account', 'Basic Analytics', 'Email Support', '5GB Storage'],
    popular: false,
  },
  {
    name: 'Premium',
    price: '99',
    features: [
      '5 User Accounts',
      'Advanced Analytics',
      'Priority Support',
      '50GB Storage',
      'API Access',
    ],
    popular: true,
  },
  {
    name: 'Professional',
    price: '149',
    features: [
      'Unlimited Users',
      'Custom Analytics',
      '24/7 Support',
      'Unlimited Storage',
      'API Access',
      'Custom Reports',
    ],
    popular: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">Pricing</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map(({ name, price, features, popular }) => (
            <div
              key={name}
              className={`rounded-lg bg-white p-8 text-center transition-colors dark:bg-gray-800 ${
                popular
                  ? 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] ring-2 ring-brand'
                  : 'shadow-sm'
              }`}
            >
              {popular && (
                <span className="mb-4 inline-block rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-ink dark:text-white">{name}</h3>
              <div className="mt-4">
                <span className="text-gray-400">$</span>
                <span className="text-4xl font-bold text-brand">{price}</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-left text-sm text-gray-600 dark:text-gray-300">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded-full py-3 text-sm font-bold transition-colors ${
                  popular
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border border-brand text-brand hover:bg-brand hover:text-white'
                }`}
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
