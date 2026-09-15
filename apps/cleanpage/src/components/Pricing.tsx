import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '0',
    desc: '100% free. Forever',
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages', 'All features'],
    highlighted: false,
  },
  {
    name: 'Startup',
    price: '19',
    desc: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages', 'All features'],
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '49',
    desc: 'All features are included',
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages', 'All features'],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '99',
    desc: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages', 'All features'],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">Our Best Pricing</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-center shadow-sm ${
                plan.highlighted ? 'bg-brand text-white' : 'bg-white'
              }`}
            >
              <h3
                className={`font-display text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
              >
                {plan.name}
              </h3>
              <div className="mt-4">
                <span
                  className={`font-display text-sm ${plan.highlighted ? 'text-white/70' : 'text-mist'}`}
                >
                  $
                </span>
                <span
                  className={`font-display text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-ink'}`}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={`mt-2 font-sans text-sm ${plan.highlighted ? 'text-white/70' : 'text-mist'}`}
              >
                {plan.desc}
              </p>
              <a
                href="#contact"
                className={`mt-6 inline-block w-full rounded py-3 font-display text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-brand hover:bg-white/90'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
              >
                Get Started
              </a>
              <h4
                className={`mt-6 font-display text-sm font-semibold ${plan.highlighted ? 'text-white/90' : 'text-ink'}`}
              >
                Enjoy All The Features
              </h4>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-center justify-center gap-2 font-sans text-sm ${plan.highlighted ? 'text-white/80' : 'text-mist'}`}
                  >
                    <Check size={14} className={plan.highlighted ? 'text-white' : 'text-brand'} />
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
