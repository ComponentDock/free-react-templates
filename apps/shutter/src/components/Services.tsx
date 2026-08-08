import { ArrowRight, Briefcase, Camera, Heart } from 'lucide-react'

interface PackageCard {
  title: string
  blurb: string
  price: string
  features: string[]
  icon: typeof Camera
}

const packages: PackageCard[] = [
  {
    title: 'Portrait Session',
    blurb: 'Intimate portraits that reveal your authentic self.',
    price: 'From $350',
    icon: Camera,
    features: [
      '1-hour photography session',
      'Up to 2 locations',
      '30 professionally edited photos',
      'Private online gallery',
    ],
  },
  {
    title: 'Wedding Coverage',
    blurb: 'Full day coverage (up to 10 hours).',
    price: 'From $1,500',
    icon: Heart,
    features: [
      '2 photographers',
      '500+ edited photographs',
      'Premium wedding album',
      'Complimentary engagement session',
    ],
  },
  {
    title: 'Commercial',
    blurb: 'Brand photography for products and teams.',
    price: 'From $800',
    icon: Briefcase,
    features: [
      'Product shots and styling',
      'Editorial and lifestyle',
      'Full commercial licensing included',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Services &amp; Packages
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Thoughtfully designed packages to capture your story. Every session includes
            professional editing and a curated online gallery.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-800 dark:text-primary-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{item.blurb}</p>
                <p className="mt-4 font-serif text-2xl font-bold text-gray-900 dark:text-white">
                  {item.price}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-900 transition-colors hover:text-accent-600 dark:text-white"
                >
                  Inquire More
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
