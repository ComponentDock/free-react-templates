import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Personal',
    price: '$49',
    period: '/month',
    features: [
      '1 Website',
      '5 GB Storage',
      'Unlimited Bandwidth',
      'SSL Certificate',
      'Email Support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    features: [
      '10 Websites',
      '50 GB Storage',
      'Unlimited Bandwidth',
      'SSL Certificate',
      'Priority Support',
      'SEO Tools',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Ultimate',
    price: '$199',
    period: '/month',
    features: [
      'Unlimited Websites',
      '200 GB Storage',
      'Unlimited Bandwidth',
      'SSL Certificate',
      '24/7 Support',
      'SEO Tools',
      'Analytics Dashboard',
    ],
    cta: 'Get Started',
    popular: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Pricing</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 text-center ${
                plan.popular
                  ? 'bg-primary-500 text-white ring-4 ring-primary-300'
                  : 'bg-white text-ink shadow-sm'
              }`}
            >
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-smoke'}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check
                      className={`h-4 w-4 shrink-0 ${plan.popular ? 'text-white' : 'text-primary-500'}`}
                    />
                    <span className={plan.popular ? 'text-white' : 'text-ink'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`inline-block w-full rounded py-3 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-primary-500 hover:bg-gray-100'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
