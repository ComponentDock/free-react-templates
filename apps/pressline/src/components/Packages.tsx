import { Check } from 'lucide-react'

const packages = [
  {
    name: 'Starter',
    price: 9,
    features: ['5 Book Listings', 'Basic Analytics', 'Email Support', 'Standard Formatting'],
    featured: false,
  },
  {
    name: 'Professional',
    price: 29,
    features: [
      '50 Book Listings',
      'Advanced Analytics',
      'Priority Support',
      'Premium Formatting',
      'Marketing Tools',
      'Author Profile Page',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 79,
    features: [
      'Unlimited Listings',
      'Full Analytics Suite',
      'Dedicated Support',
      'Custom Design',
      'Distribution Network',
      'API Access',
    ],
    featured: false,
  },
] as const

export function Packages() {
  return (
    <section className="bg-surface-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">
          Affordable Packages
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded p-8 text-center ${
                pkg.featured ? 'bg-primary-300 text-white shadow-lg' : 'bg-white text-ink shadow-sm'
              }`}
            >
              <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold">${pkg.price}</span>
                <span className="text-sm opacity-70">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 inline-block rounded px-6 py-3 text-sm font-semibold transition-colors ${
                  pkg.featured
                    ? 'bg-white text-primary-300 hover:bg-gray-100'
                    : 'bg-primary-300 text-white hover:bg-primary-400'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
