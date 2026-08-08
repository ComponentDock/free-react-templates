import { Check } from 'lucide-react'
import { Reveal } from './Reveal'

const packages = [
  {
    name: 'Refresher',
    tagline: 'A quick reset for busy days',
    price: 149,
    features: [
      '60-minute massage',
      'Express facial',
      'Hand & foot care',
      'Relaxation lounge access',
    ],
    popular: false,
  },
  {
    name: 'Indulgence',
    tagline: 'Our most-loved half-day escape',
    price: 249,
    features: [
      '90-minute signature massage',
      'Deluxe facial treatment',
      'Full manicure & pedicure',
      'Spa lunch & lounge access',
    ],
    popular: true,
  },
  {
    name: 'Ultimate Retreat',
    tagline: 'A full day of pure pampering',
    price: 449,
    features: [
      'Full-body ritual & scrub',
      'Signature facial & hair styling',
      'Wellness coaching session',
      'Champagne lunch & private suite',
    ],
    popular: false,
  },
] as const

export function Packages() {
  return (
    <section id="packages" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Packages
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Signature Packages
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Thoughtfully curated escapes — one-time package pricing, no memberships required.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal
              key={pkg.name}
              delay={index * 80}
              className={`relative flex flex-col rounded-2xl p-8 shadow-soft transition-shadow hover:shadow-soft-lg ${
                pkg.popular
                  ? 'bg-primary-600 text-white dark:bg-primary-700'
                  : 'bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white'
              }`}
            >
              {pkg.popular ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-400 px-4 py-1 text-xs font-semibold tracking-wide text-gray-900 uppercase">
                  Most Popular
                </span>
              ) : null}
              <h3 className="font-heading text-xl font-bold">{pkg.name}</h3>
              <p
                className={`mt-1 text-sm ${pkg.popular ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}
              >
                {pkg.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold">${pkg.price}</span>
                <span
                  className={`text-sm ${pkg.popular ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}
                >
                  One-time package price
                </span>
              </div>
              <ul className="mt-8 flex-1 space-y-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${pkg.popular ? 'text-accent-300' : 'text-primary-600 dark:text-primary-400'}`}
                      aria-hidden="true"
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  pkg.popular
                    ? 'bg-white text-primary-700 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                Book Package
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
