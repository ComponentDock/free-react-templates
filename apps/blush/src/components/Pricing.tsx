import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Free',
    tag: 'Beginner',
    price: 'Free',
    features: ['2 Email Addresses', '25 GB Space', '24h Live Support', 'Documentation inside'],
  },
  {
    name: 'Pro',
    tag: 'Recommended',
    price: '$29',
    features: [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ],
  },
  {
    name: 'Business',
    tag: 'Always',
    price: '$59',
    features: [
      '2 Email Addresses',
      '25 GB Space',
      '24h Live Support',
      'Documentation inside',
      'SEO Plan',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-primary-50/40 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
            Purchase App
          </h2>
          <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nibh sed mi ullamcorper
            rhoncus.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.price}
              className={`rounded-2xl border-t-[5px] bg-white p-10 text-center shadow-lg dark:bg-gray-950 ${
                index === 1 ? 'border-primary-400' : 'border-primary-200'
              }`}
            >
              <span className="inline-block rounded-full bg-accent-400/50 px-4 py-1 text-xs font-bold uppercase tracking-wide text-ink">
                {plan.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink dark:text-gray-100">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-bold text-primary-400">
                  {plan.price}
                </span>
                <span className="text-sm text-smoke dark:text-gray-400">/ Per Month</span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm text-smoke dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="mt-9 w-full rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
              >
                Buy Now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
