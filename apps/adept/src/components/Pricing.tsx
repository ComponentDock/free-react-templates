import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starters',
    price: '$19',
    period: '/month',
    features: ['5 Projects', '10 GB Storage', 'Basic Support', 'Email Access'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$49',
    period: '/month',
    features: [
      'Unlimited Projects',
      '100 GB Storage',
      'Priority Support',
      'API Access',
      'Analytics',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/month',
    features: [
      'Unlimited Everything',
      '500 GB Storage',
      '24/7 Support',
      'Custom Domain',
      'SLA',
      'Dedicated Manager',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-lg border p-8 text-center ${
                p.highlighted
                  ? 'border-brand bg-brand text-white shadow-xl'
                  : 'border-divider bg-white'
              }`}
            >
              <h3 className="mb-2 font-display text-xl font-bold uppercase">{p.name}</h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className={`text-sm ${p.highlighted ? 'text-white/70' : 'text-mist'}`}>
                  {p.period}
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check size={16} className={p.highlighted ? 'text-accent' : 'text-brand'} />
                    <span className={`text-sm ${p.highlighted ? 'text-white/90' : 'text-mist'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className={`inline-block w-full rounded py-3 text-center font-semibold uppercase transition-colors ${
                  p.highlighted
                    ? 'bg-white text-brand hover:bg-white/90'
                    : 'bg-brand text-white hover:bg-brand/90'
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
