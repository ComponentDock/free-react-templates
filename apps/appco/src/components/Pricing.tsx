import { ButtonLink } from '@free-react-templates/ui'

interface Plan {
  name: string
  price: string
  tagline: string
  features: string[]
  featured: boolean
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$9',
    tagline: 'For individuals getting started',
    features: ['1 project', '5 GB storage', 'Email support'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    tagline: 'For growing teams',
    features: ['Unlimited projects', '100 GB storage', 'Priority support', 'Advanced analytics'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    tagline: 'For large organizations',
    features: ['Unlimited everything', 'Dedicated manager', 'SLA & SSO'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            Choose Your Very Best Pricing Plan.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={
                plan.featured
                  ? 'rounded-3xl bg-primary-600 p-8 text-white shadow-xl'
                  : 'rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900'
              }
            >
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-sm opacity-80">{plan.tagline}</p>
              <p className="mt-6 font-display text-5xl font-extrabold">
                {plan.price}
                <span className="text-base font-medium opacity-80">/month</span>
              </p>
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
                  Get Started
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
