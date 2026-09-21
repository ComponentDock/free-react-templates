import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Beginner',
    price: 59,
    features: ['Up to 7 classes', 'Locker room access', 'Basic schedule'],
    accent: 'bg-brand',
  },
  {
    name: 'Intermediate',
    price: 99,
    features: ['Up to 14 classes', 'Personal locker', 'Priority scheduling', 'Guest passes (2)'],
    accent: 'bg-accent-warm',
  },
  {
    name: 'Advanced',
    price: 159,
    features: [
      'Unlimited classes',
      'Personal locker',
      'Priority scheduling',
      'Guest passes (5)',
      'Private sessions (1)',
    ],
    accent: 'bg-accent-coral',
  },
  {
    name: 'Professional',
    price: 199,
    features: [
      'Unlimited classes',
      'Premium locker',
      'Priority scheduling',
      'Guest passes (unlimited)',
      'Private sessions (4)',
      'Retreat access',
    ],
    accent: 'bg-brand',
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Pricing Plans</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Choose the plan that fits your yoga journey — all include access to our world-class
            facilities
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className={`${plan.accent} p-6 text-center text-white`}>
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
              </div>
              <div className="p-6 text-center">
                <span className="font-display text-4xl font-bold text-ink">${plan.price}</span>
                <span className="block mt-1 text-sm text-mist">Per month</span>
                <ul className="mt-6 space-y-3 text-left text-sm text-body">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full rounded bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
