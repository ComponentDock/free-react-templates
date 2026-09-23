import { useState } from 'react'
import { Check } from 'lucide-react'

interface Plan {
  name: string
  monthlyPrice: string
  yearlyPrice: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Personal',
    monthlyPrice: '$29',
    yearlyPrice: '$299',
    features: [
      'Far far away, behind the word mountains',
      'Far far away, behind the word mountains',
    ],
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$49',
    yearlyPrice: '$599',
    features: [
      'Far far away, behind the word mountains',
      'Far far away, behind the word mountains',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: '$99',
    yearlyPrice: '$1,999',
    features: [
      'Far far away, behind the word mountains',
      'Far far away, behind the word mountains',
    ],
  },
]

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="bg-paper py-20" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand">
            Pricing for everyone
          </span>
          <h2 className="mb-4 text-3xl font-bold">Our Pricing</h2>

          <div className="inline-flex items-center gap-3">
            <span className={`text-sm ${!yearly ? 'font-bold text-ink' : 'text-mist'}`}>
              Monthly
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className="relative h-6 w-12 rounded-full bg-brand transition-colors"
              aria-label={`Switch to ${yearly ? 'monthly' : 'yearly'} pricing`}
              aria-pressed={yearly}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  yearly ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm ${yearly ? 'font-bold text-ink' : 'text-mist'}`}>Yearly</span>
            {yearly && (
              <span className="rounded-full bg-brand/10 px-2 py-0.5 text-xs font-semibold text-brand">
                Save 25%
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={`${plan.name}-${plan.monthlyPrice}`}
              className={`rounded-2xl border-2 p-8 ${
                plan.highlighted ? 'border-brand bg-brand/5' : 'border-gray-100 bg-white'
              }`}
            >
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-sm text-mist">Far far away, behind the word mountains</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="ml-1 text-sm text-mist">/ {yearly ? 'year' : 'month'}</span>
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-mist">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-brand text-white hover:bg-brand-dark'
                    : 'border-2 border-brand text-brand hover:bg-brand hover:text-white'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
