import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Silver',
    price: 52,
    features: ['Small tattoo (up to 3")', '1 revision', 'Basic aftercare kit', '1-hour session'],
    featured: false,
  },
  {
    name: 'Diamond',
    price: 125,
    features: [
      'Medium tattoo (up to 6")',
      '3 revisions',
      'Premium aftercare kit',
      '2-hour session',
      'Free touch-up',
    ],
    featured: true,
  },
  {
    name: 'Golden',
    price: 95,
    features: ['Small–medium tattoo', '2 revisions', 'Standard aftercare kit', '1.5-hour session'],
    featured: false,
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-obsidian py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">Our Pricing</h2>
          <p className="mt-4 text-gray-400">Transparent pricing for every budget</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'rounded-lg border p-8 text-center transition-colors',
                plan.featured
                  ? 'border-primary-400 bg-void shadow-lg shadow-primary-400/10'
                  : 'border-gray-800 bg-void',
              )}
            >
              <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-primary-400">${plan.price}</span>
              </div>
              <ul className="mt-6 space-y-3 text-left">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-400">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  'mt-8 inline-flex w-full items-center justify-center rounded py-3 text-sm font-bold transition-colors',
                  plan.featured
                    ? 'bg-primary-400 text-void hover:bg-primary-500'
                    : 'border border-gray-700 text-white hover:border-primary-400 hover:text-primary-400',
                )}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
