import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 49,
    features: [
      '20 Workouts',
      'Meal plans in mobile',
      'One Coaching',
      '50% Group coaching',
      '24/7 Customer support',
    ],
  },
  {
    name: 'Standard',
    price: 79,
    features: [
      '20 Workouts',
      'Meal plans in mobile',
      'One Coaching',
      '50% Group coaching',
      '24/7 Customer support',
    ],
  },
  {
    name: 'Premium',
    price: 109,
    features: [
      '20 Workouts',
      'Meal plans in mobile',
      'One Coaching',
      '50% Group coaching',
      '24/7 Customer support',
    ],
  },
  {
    name: 'Platinum',
    price: 159,
    features: [
      '20 Workouts',
      'Meal plans in mobile',
      'One Coaching',
      '50% Group coaching',
      '24/7 Customer support',
    ],
  },
]

export function Pricing() {
  return (
    <section className="bg-mist py-16" id="pricing">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
            Price & Plans
          </p>
          <h2 className="text-2xl font-bold text-ink">Choose Your Perfect Plans</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded bg-white p-8 text-center shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="mb-4 text-sm text-smoke">A Beautiful Healthcare</p>
              <div className="mb-6">
                <sup className="text-base text-primary-400">$</sup>
                <span className="text-4xl font-bold text-ink">{plan.price}</span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-smoke">
                    <Check size={16} className="shrink-0 text-primary-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block rounded bg-primary-400 px-6 py-3 text-sm font-semibold text-white no-underline hover:bg-primary-500"
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
