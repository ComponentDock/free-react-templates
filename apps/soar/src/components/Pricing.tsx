import { Check } from 'lucide-react'
import { ButtonLink, Card, CardContent } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    price: '$0',
    tagline: '100% free. Forever',
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages', 'All features'],
    featured: false,
  },
  {
    name: 'Startup',
    price: '$19',
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages', 'All features'],
    featured: false,
  },
  {
    name: 'Premium',
    price: '$49',
    tagline: 'All features are included',
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages', 'All features'],
    featured: true,
  },
  {
    name: 'Pro',
    price: '$99',
    tagline: 'All features are included',
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages', 'All features'],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Pricing Plans
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-gray-900 sm:text-3xl dark:text-gray-100">
            Our Best Pricing
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-0 ${plan.featured ? 'border-primary-400 ring-2 ring-primary-400/30' : ''}`}
            >
              <CardContent className="flex h-full flex-col p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold text-primary-400">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.tagline}</p>
                <ButtonLink
                  href="#contact"
                  className={`mt-6 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                    plan.featured
                      ? 'bg-primary-400 text-white hover:bg-primary-500'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </ButtonLink>
                <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Enjoy All The Features
                </p>
                <ul className="mt-4 space-y-3 text-left text-sm text-gray-600 dark:text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-accent-600" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
