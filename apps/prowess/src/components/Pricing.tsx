import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Beginner',
    price: 'Free',
    period: '',
    features: ['Gym access (basic)', 'Locker room', '1 group class/week', 'Online resources'],
    featured: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: [
      'Full gym access',
      'Unlimited group classes',
      '2 PT sessions/month',
      'Sauna access',
      'Nutrition guide',
    ],
    featured: true,
  },
  {
    name: 'Expert',
    price: '$59',
    period: '/mo',
    features: [
      'Everything in Pro',
      'Unlimited PT sessions',
      'Custom meal plan',
      'VIP lounge',
      'Priority booking',
      'Guest passes',
    ],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Affordable Plans
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-[0.1em] text-heading dark:text-white sm:text-4xl">
            Pricing
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl p-8 transition-all ${
                plan.featured
                  ? 'bg-navy text-white shadow-2xl dark:bg-navy-dark'
                  : 'bg-gray-50 text-heading dark:bg-gray-900 dark:text-white'
              }`}
            >
              {plan.featured && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  Popular
                </div>
              )}
              <h3 className="text-lg font-bold uppercase tracking-wide">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                {plan.period && (
                  <span
                    className={`text-sm ${plan.featured ? 'text-white/60' : 'text-body dark:text-gray-400'}`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check
                      className={`h-4 w-4 shrink-0 ${plan.featured ? 'text-brand' : 'text-brand'}`}
                      aria-hidden="true"
                    />
                    <span
                      className={plan.featured ? 'text-white/80' : 'text-body dark:text-gray-400'}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink
                  href="#contact"
                  className={`w-full rounded-full px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${
                    plan.featured
                      ? 'bg-brand text-white hover:bg-white hover:text-brand'
                      : 'bg-brand text-white hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-brand'
                  }`}
                >
                  Get Started
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
