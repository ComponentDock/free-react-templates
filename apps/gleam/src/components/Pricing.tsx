import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { frequencies } from './QuoteCalculator'
import { Reveal } from './Reveal'

const packages = [
  {
    name: 'Basic Clean',
    tagline: 'Essential cleaning for maintained homes',
    price: '$99',
    popular: false,
    features: [
      'Dusting all surfaces',
      'Vacuuming & mopping',
      'Kitchen counters & sink',
      'Bathroom sanitization',
      'Trash removal',
    ],
    cta: 'Book Basic',
  },
  {
    name: 'Deep Clean',
    tagline: 'Thorough top-to-bottom clean',
    price: '$199',
    popular: true,
    features: [
      'Everything in Basic',
      'Inside appliances',
      'Baseboards & door frames',
      'Window sills & blinds',
      'Cabinet exteriors',
      'Light fixtures',
    ],
    cta: 'Book Deep Clean',
  },
  {
    name: 'Move-In/Out',
    tagline: 'Complete property preparation',
    price: '$299',
    popular: false,
    features: [
      'Everything in Deep Clean',
      'Inside cabinets & drawers',
      'Oven & refrigerator deep clean',
      'Closet cleaning',
      'Garage sweep',
      'Wall spot cleaning',
    ],
    cta: 'Book Move Clean',
  },
  {
    name: 'Commercial',
    tagline: 'Tailored to your business',
    price: 'Custom',
    popular: false,
    features: [
      'Custom cleaning schedule',
      'Floor care & polishing',
      'Restroom sanitization',
      'Break room deep clean',
      'Window washing',
      'Dedicated account manager',
    ],
    cta: 'Get Quote',
  },
] as const

export function Pricing() {
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]>('One-Time')

  return (
    <section id="pricing" className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <Reveal>
          <p className="text-center text-sm font-bold uppercase tracking-wider text-primary-600">
            Packages
          </p>
          <h2 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Choose Your Clean
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-base text-gray-600 dark:text-gray-400">
            Transparent pricing with no hidden fees. Pick the package that fits your needs and
            budget.
          </p>
          <div className="mt-6 flex justify-center" role="group" aria-label="Pricing frequency">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-full bg-gray-100 p-1.5 dark:bg-gray-900">
              {frequencies.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFrequency(option)}
                  aria-pressed={frequency === option}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                    frequency === option
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
            Showing {frequency} pricing
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 100}>
              <div
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border p-6',
                  pkg.popular
                    ? 'border-primary-600 shadow-xl shadow-primary-900/10 dark:border-primary-500'
                    : 'border-gray-200 dark:border-gray-800',
                  pkg.popular ? 'bg-gray-50 dark:bg-gray-900' : 'bg-white dark:bg-gray-900',
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pkg.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{pkg.tagline}</p>
                <p className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
                  {pkg.price}
                </p>
                <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={cn(
                    'mt-6 w-full rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
                    pkg.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'border border-gray-300 text-gray-800 hover:border-primary-500 hover:text-primary-600 dark:border-gray-700 dark:text-white dark:hover:border-primary-400 dark:hover:text-primary-300',
                  )}
                >
                  {pkg.cta}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
