import { Check } from 'lucide-react'

const plans = [
  {
    name: 'One Day Training',
    price: '$10',
    period: 'per day',
    features: ['Access to gym floor', 'Locker room', 'Basic equipment', '1 group class'],
  },
  {
    name: 'Pay Every Month',
    price: '$49',
    period: 'per month',
    features: [
      'Full gym access',
      'All group classes',
      'Sauna & steam room',
      'Personal locker',
      'Nutrition guide',
    ],
  },
  {
    name: '1 Year Membership',
    price: '$399',
    period: 'per year',
    features: [
      'Full gym access',
      'All group classes',
      'Sauna & steam room',
      'Personal locker',
      'Nutrition guide',
      'Free PT session',
      'Guest passes',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-400">
            Pricing Tables
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Membership Plans</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map(({ name, price, period, features }) => (
            <div
              key={name}
              className="rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm"
            >
              <h3 className="mb-2 text-lg font-bold text-gray-900">{name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-brand-400">{price}</span>
                <span className="ml-1 text-sm text-gray-500">/{period.split(' ')[1]}</span>
              </div>
              <a
                href="#contact"
                className="mb-6 block rounded bg-brand-400 py-3 font-semibold text-white transition-colors hover:bg-brand-500"
              >
                Get Started
              </a>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-500">
                Enjoy All The Features
              </h4>
              <ul className="space-y-3 text-left">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
