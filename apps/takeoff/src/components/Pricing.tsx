import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic',
    price: '$50/m',
    blurb: 'For individuals getting started.',
    features: [
      '10 User',
      '50 Email Accounts',
      '100 MB Disk Space',
      '2 Subdomains',
      'Free Updates',
      'Support 24/7',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$150/m',
    blurb: 'For growing teams that need more.',
    features: [
      '10 User',
      '50 Email Accounts',
      '100 MB Disk Space',
      '2 Subdomains',
      'Free Updates',
      'Support 24/7',
    ],
    popular: true,
  },
  {
    name: 'Unlimited',
    price: '$250/m',
    blurb: 'For businesses that want it all.',
    features: [
      '10 User',
      '50 Email Accounts',
      '100 MB Disk Space',
      '2 Subdomains',
      'Free Updates',
      'Support 24/7',
    ],
    popular: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Pricing Plan
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Simple, transparent pricing that grows with you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? 'border-primary-600 shadow-xl shadow-primary-600/10'
                  : 'border-gray-100 shadow-sm dark:border-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted dark:text-gray-400">{plan.blurb}</p>
              <p className="mt-6 font-display text-4xl font-bold text-primary-600">{plan.price}</p>
              <ul className="mt-8 space-y-3 text-sm text-ink dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-10 w-full rounded-full"
                variant={plan.popular ? 'primary' : 'outline'}
              >
                Purchase
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
