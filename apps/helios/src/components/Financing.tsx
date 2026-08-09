import { BadgeCheck, Check } from 'lucide-react'
import { Badge, ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

interface Plan {
  name: string
  price: string
  badge: string
  badgeVariant: 'default' | 'success' | 'warning'
  blurb: string
  bullets: string[]
}

const plans: Plan[] = [
  {
    name: 'Cash Purchase',
    price: '$15,000',
    badge: 'Best Value',
    badgeVariant: 'warning',
    blurb:
      'Own your system outright and enjoy the lowest total cost with maximum long-term savings.',
    bullets: [
      'No monthly payments',
      '30% federal tax credit',
      'Up to 25-year warranty',
      'Own your energy forever',
    ],
  },
  {
    name: 'Solar Lease',
    price: '$0 down',
    badge: 'Most Popular',
    badgeVariant: 'success',
    blurb: 'Go solar with no upfront cost and predictable monthly payments that fit your budget.',
    bullets: [
      'No upfront cost',
      'Fixed monthly payments',
      'Maintenance included',
      'Start saving immediately',
    ],
  },
  {
    name: 'Power Purchase Agreement',
    price: '$0 upfront',
    badge: 'Zero Risk',
    badgeVariant: 'default',
    blurb: 'Pay only for the clean energy your system produces at a locked-in, lower rate.',
    bullets: [
      'No equipment to buy',
      'Locked-in energy rate',
      'We monitor and maintain',
      'Pay only for what you use',
    ],
  },
] as const

export function Financing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
              Financing
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Flexible Payment Options
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Solar is more affordable than ever — choose the plan that fits your financial goals.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <article className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-8 dark:border-gray-800 dark:bg-gray-900">
                <div className="absolute right-4 top-4">
                  <Badge variant={plan.badgeVariant} className="gap-1">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    {plan.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-1 text-3xl font-extrabold text-primary-600 dark:text-primary-400">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {plan.blurb}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {plan.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#contact"
                  variant={plan.badgeVariant === 'success' ? 'primary' : 'outline'}
                  className="mt-8 w-full"
                >
                  Learn More
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
