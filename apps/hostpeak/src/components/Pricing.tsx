import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Normal',
    desc: 'Perfect for personal sites',
    price: '45.80',
    features: [
      'Unlimited Websites',
      'Unlimited Disk Space',
      'Unlimited Bandwidth',
      '24/7/365 Support',
      'Unlimited Email Accounts',
      '99.9% Service Uptime',
    ],
  },
  {
    name: 'Premium',
    desc: 'Best for growing businesses',
    price: '65.80',
    features: [
      'Unlimited Websites',
      'Unlimited Disk Space',
      'Unlimited Bandwidth',
      '24/7/365 Support',
      'Unlimited Email Accounts',
      '99.9% Service Uptime',
    ],
  },
  {
    name: 'Ultimate',
    desc: 'For enterprise workloads',
    price: '75.80',
    features: [
      'Unlimited Websites',
      'Unlimited Disk Space',
      'Unlimited Bandwidth',
      '24/7/365 Support',
      'Unlimited Email Accounts',
      '99.9% Service Uptime',
    ],
  },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-r from-brand-start to-brand-end py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
            Popular Pricing Package
          </h2>
          <div className="mx-auto h-px w-24 bg-white/50" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded bg-white/95 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="border-b border-border px-6 py-10">
                <h4 className="mb-1 text-xl font-black text-heading">{plan.name}</h4>
                <p className="mb-4 text-sm text-body">{plan.desc}</p>
                <div className="text-5xl font-bold text-heading">
                  <span className="text-2xl align-top">$</span>
                  {plan.price}
                </div>
              </div>
              <ul className="space-y-3 px-8 py-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-heading">
                    <Check className="h-4 w-4 text-brand-end" />
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="pb-10">
                <button className="rounded-full border border-border bg-transparent px-8 py-3 text-sm font-medium text-heading transition-colors hover:bg-brand-start hover:text-white hover:border-brand-start">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
