import { Camera, Aperture, Film } from 'lucide-react'

const plans = [
  {
    id: 'standard-1',
    icon: Camera,
    name: 'Standard',
    price: '$50.00',
    period: '/ mo',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
  {
    id: 'standard-2',
    icon: Aperture,
    name: 'Standard',
    price: '$50.00',
    period: '/ mo',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
  {
    id: 'standard-3',
    icon: Film,
    name: 'Standard',
    price: '$50.00',
    period: '/ mo',
    features: [
      '2GB Bandwidth',
      'Two Account',
      '15GB Storage',
      'Sale After Service',
      '3 Host Domain',
      '24/7 Support',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
            Price table
          </p>
          <h2 className="font-heading text-4xl font-semibold uppercase text-gray-200 sm:text-5xl">
            Pricing Plan
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ id, icon: Icon, name, price, period, features }) => (
            <div key={id} className="border border-gray-100 p-10 text-center">
              <div className="mb-6 flex justify-center">
                <Icon className="h-12 w-12 text-slate-900" />
              </div>
              <p className="mb-4 font-heading text-lg font-medium uppercase text-slate-900">
                {name}
              </p>
              <p className="mb-6">
                <span className="font-heading text-4xl font-bold text-slate-900">{price}</span>
                <span className="text-sm text-gray-400">{period}</span>
              </p>
              <ul className="mb-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="text-sm text-gray-400">
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block border-2 border-slate-900 px-8 py-3 font-heading text-sm font-medium uppercase tracking-widest text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
