import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Plan {
  title: string
  price: string
  period: string
  tagline: string
  features: string[]
  featured: boolean
}

const plans: Plan[] = [
  {
    title: 'One Day Training',
    price: '$7',
    period: '/Day',
    tagline: '100% free. Forever',
    features: [
      'Onetime Access To All Club',
      'Group Trainer',
      'Book A Group Class',
      'Fitness Orientation',
    ],
    featured: false,
  },
  {
    title: 'Pay Every Month',
    price: '$65',
    period: '/Month',
    tagline: 'All features are included',
    features: ['Group Classes', 'Discuss Fitness Goals', 'Group Trainer', 'Fitness Orientation'],
    featured: true,
  },
  {
    title: '1 Year Membership',
    price: '$125',
    period: '/Year',
    tagline: 'All features are included',
    features: ['Group Classes', 'Discuss Fitness Goals', 'Group Trainer', 'Fitness Orientation'],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section className="bg-cloud py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-brand">
            Pricing Tables
          </p>
          <h2 className="font-display text-4xl font-black uppercase text-ink dark:text-white">
            Membership Plans
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={cn(
                'flex flex-col rounded-lg p-8 shadow-sm transition-shadow hover:shadow-lg',
                plan.featured
                  ? 'bg-gradient-to-br from-brand to-brand-orange text-white'
                  : 'bg-white text-ink dark:bg-gray-800 dark:text-white',
              )}
            >
              <h3 className="font-display text-lg font-bold uppercase">{plan.title}</h3>
              <p
                className={cn(
                  'mt-2 text-sm font-semibold',
                  plan.featured ? 'text-white/80' : 'text-mist dark:text-gray-400',
                )}
              >
                {plan.tagline}
              </p>
              <p className="mt-6 font-display text-5xl font-black">
                {plan.price}
                <span
                  className={cn(
                    'text-base font-semibold',
                    plan.featured ? 'text-white/80' : 'text-mist dark:text-gray-400',
                  )}
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span
                      className={cn(
                        'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                        plan.featured ? 'bg-white/20' : 'bg-brand/10 text-brand',
                      )}
                    >
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-8 rounded px-6 py-3 text-center text-sm font-bold uppercase tracking-wide transition-colors',
                  plan.featured
                    ? 'bg-white text-brand hover:bg-gray-100'
                    : 'bg-gradient-to-br from-brand to-brand-orange text-white hover:opacity-90',
                )}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
