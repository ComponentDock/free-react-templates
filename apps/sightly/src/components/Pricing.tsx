import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '$700',
    features: [
      '5 Social Media Accounts',
      '10 Blog Posts/Month',
      'Basic SEO Audit',
      'Monthly Reports',
      'Email Support',
    ],
  },
  {
    name: 'Standard',
    price: '$700',
    features: [
      '10 Social Media Accounts',
      '20 Blog Posts/Month',
      'Advanced SEO Strategy',
      'Weekly Reports',
      'Priority Support',
      'Content Calendar',
    ],
  },
  {
    name: 'Premium',
    price: '$700',
    features: [
      'Unlimited Social Media',
      '40 Blog Posts/Month',
      'Full SEO Management',
      'Real-time Dashboard',
      '24/7 Dedicated Support',
      'Custom Strategy',
    ],
  },
]

export function Pricing() {
  return (
    <section id="blog" className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark font-heading md:text-4xl">
          Affordable pricing plan
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-lg bg-white p-8 text-center shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-text-dark font-heading">
                {plan.name}
              </h3>
              <div className="mb-6 text-4xl font-bold text-primary">{plan.price}</div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-text-gray-dark">
                    <Check size={16} className="shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block w-full rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Get Started Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
