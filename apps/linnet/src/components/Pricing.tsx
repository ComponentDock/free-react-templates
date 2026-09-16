import { useState } from 'react'

type Period = 'monthly' | 'yearly'

const plans: Record<
  Period,
  { name: string; price: number; features: string[]; featured?: boolean }[]
> = {
  monthly: [
    {
      name: 'Basic',
      price: 10,
      features: ['Free Useable', '10GB Storage', 'Security Service', 'Dedicated Account'],
    },
    {
      name: 'Premium',
      price: 50,
      features: ['Free Useable', '50GB Storage', 'Priority Support', 'Dedicated Account'],
      featured: true,
    },
    {
      name: 'Business',
      price: 80,
      features: ['Free Useable', '100GB Storage', 'Priority Support', 'Custom Domain'],
    },
    {
      name: 'Ultimate',
      price: 100,
      features: ['Unlimited Useable', '500GB Storage', '24/7 Support', 'White Label'],
    },
  ],
  yearly: [
    {
      name: 'Basic',
      price: 10,
      features: ['Free Useable', '10GB Storage', 'Security Service', 'Dedicated Account'],
    },
    {
      name: 'Premium',
      price: 50,
      features: ['Free Useable', '50GB Storage', 'Priority Support', 'Dedicated Account'],
      featured: true,
    },
    {
      name: 'Business',
      price: 80,
      features: ['Free Useable', '100GB Storage', 'Priority Support', 'Custom Domain'],
    },
    {
      name: 'Ultimate',
      price: 100,
      features: ['Unlimited Useable', '500GB Storage', '24/7 Support', 'White Label'],
    },
  ],
}

export function Pricing() {
  const [period, setPeriod] = useState<Period>('monthly')

  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-500">Pricing Plan</h2>
          <p className="mt-3 text-gray-500">Choose the plan that best fits your needs.</p>
        </div>

        {/* Period tabs */}
        <div className="mb-10 flex justify-center gap-4">
          {(['monthly', 'yearly'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`rounded px-6 py-2 text-sm font-semibold capitalize transition-colors ${
                period === p
                  ? 'bg-primary-400 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans[period].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md ${
                plan.featured ? 'border-primary-400 ring-2 ring-primary-400' : 'border-gray-200'
              }`}
            >
              <h3 className="font-heading text-lg font-bold text-navy-500">{plan.name}</h3>
              <div className="mt-3 text-3xl font-bold text-primary-400">
                ${plan.price}
                <span className="text-sm font-normal text-gray-500">
                  {' '}
                  /{period === 'monthly' ? 'mo' : 'yr'}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-gray-500">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded py-2.5 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-primary-400 text-white hover:bg-primary-500'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
