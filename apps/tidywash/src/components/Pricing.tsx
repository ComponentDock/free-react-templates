import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

interface Plan {
  name: string
  price: string
  features: string[]
  highlighted?: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$29.00',
    features: ['1 Room', 'Basic Cleaning', 'Dusting', 'Vacuuming'],
  },
  {
    name: 'Standard',
    price: '$59.00',
    features: ['3 Rooms', 'Deep Cleaning', 'Kitchen & Bath', 'All Surfaces'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$79.00',
    features: ['5 Rooms', 'Premium Clean', 'Windows Included', 'Carpet Shampoo'],
  },
  {
    name: 'Ultimate',
    price: '$89.50',
    features: ['Unlimited', 'Full Service', 'Priority Booking', 'Eco Products'],
  },
]

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink">Our Plans & Pricing</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 text-center transition-shadow ${
                plan.highlighted
                  ? 'bg-primary-400 text-white shadow-xl'
                  : 'bg-white text-ink shadow-sm border border-gray-100'
              }`}
            >
              <h3 className={`text-lg font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <div className="mt-4">
                <span
                  className={`text-3xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
                >
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-smoke'}`}>
                  / session
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center justify-center gap-2 text-sm">
                    <Check
                      className={`h-4 w-4 ${plan.highlighted ? 'text-white' : 'text-primary-400'}`}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className={`mt-8 inline-block rounded px-8 py-3 text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary-400 hover:bg-gray-100'
                    : 'bg-primary-400 text-white hover:bg-primary-500'
                }`}
              >
                Sign Up
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
