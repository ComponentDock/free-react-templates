import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Standard',
    price: 49,
    features: [
      '1 month dedicated training',
      '24/7 phone support',
      'Consultation hours',
      'Personal visit',
      'Meet & greet',
    ],
    active: false,
  },
  {
    name: 'Basic',
    price: 79,
    features: [
      '1 month dedicated training',
      '24/7 phone support',
      'Consultation hours',
      'Personal visit',
      'Meet & greet',
    ],
    active: true,
  },
  {
    name: 'Standard',
    price: 109,
    features: [
      '1 month dedicated training',
      '24/7 phone support',
      'Consultation hours',
      'Personal visit',
      'Meet & greet',
    ],
    active: false,
  },
  {
    name: 'Professional',
    price: 149,
    features: [
      '1 month dedicated training',
      '24/7 phone support',
      'Consultation hours',
      'Personal visit',
      'Meet & greet',
    ],
    active: false,
  },
] as const

export function Pricing() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold text-ink sm:text-3xl">Pricing</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <div
              key={`${plan.name}-${plan.price}-${i}`}
              className={`rounded-2xl p-8 text-center transition-shadow hover:shadow-lg ${
                plan.active
                  ? 'bg-brand text-white shadow-lg'
                  : 'bg-white text-ink shadow-sm dark:bg-gray-800'
              }`}
            >
              <h3 className={`text-lg font-semibold ${plan.active ? 'text-white' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <p className="mt-4">
                <span className="text-sm align-top">$</span>
                <span className="text-4xl font-bold">{plan.price}</span>
              </p>
              <ul className="mt-6 space-y-3 text-left text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.active ? 'text-white' : 'text-brand'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.active ? 'text-white/90' : ''}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.active ? 'ghost' : 'primary'}
                size="lg"
                className={`mt-8 w-full rounded-lg ${
                  plan.active ? 'border-white text-white hover:bg-white/10' : ''
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
