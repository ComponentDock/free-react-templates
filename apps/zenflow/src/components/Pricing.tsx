import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: '$9.99',
    period: '/mo',
    features: ['5 GB Storage', '100 MB Bandwidth', '2 Email Accounts', 'Basic Support'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$19.99',
    period: '/mo',
    features: [
      '25 GB Storage',
      '500 MB Bandwidth',
      '10 Email Accounts',
      'Priority Support',
      'Custom Domain',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$29.99',
    period: '/mo',
    features: [
      '100 GB Storage',
      'Unlimited Bandwidth',
      'Unlimited Email Accounts',
      '24/7 Support',
      'Custom Domain',
      'SSL Certificate',
    ],
    highlighted: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-section-gray py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Pricing Plans
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                'bg-white p-8 text-center',
                plan.highlighted && 'border-2 border-primary-400 shadow-lg',
              )}
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-ink">
                {plan.name}
              </h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary-400">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-body">
                    <span className="mr-3 text-primary-400">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn(
                  'mt-8 inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider transition-colors',
                  plan.highlighted
                    ? 'bg-primary-400 text-white hover:bg-primary-500'
                    : 'border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white',
                )}
              >
                Buy It Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
