import { ButtonLink } from '@free-react-templates/ui'

interface Plan {
  name: string
  price: string
  features: string[]
  featured: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$06',
    features: ['One User', '1000 ui elements', 'Webmail Support', '100GB Cloud Storage'],
    featured: false,
  },
  {
    name: 'Team',
    price: '$06',
    features: [
      'One User',
      '1000 ui elements',
      'Webmail Support',
      '100GB Cloud Storage',
      'Unlimited Users',
    ],
    featured: true,
  },
  {
    name: 'Business',
    price: '$06',
    features: ['One User', '1000 ui elements', 'Webmail Support', '100GB Cloud Storage'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy dark:text-white sm:text-4xl lg:text-5xl">
            Unlock full Power
          </h2>
          <p className="mt-4 text-muted dark:text-gray-400">
            Simple, transparent pricing for teams of every size — start free and scale as you grow.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? 'rounded-3xl bg-primary-600 p-8 text-white shadow-xl'
                  : 'rounded-3xl border border-gray-100 bg-paper p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900'
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <p className="font-display text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-base font-medium opacity-80">/mo</span>
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="#download"
                  variant={plan.featured ? 'outline' : 'primary'}
                  className={
                    plan.featured
                      ? 'w-full rounded-full border-white/60 text-white hover:bg-white/10'
                      : 'w-full rounded-full'
                  }
                >
                  Get Now
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
