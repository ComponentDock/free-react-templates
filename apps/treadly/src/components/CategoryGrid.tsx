import { ChevronRight } from 'lucide-react'
import { Reveal } from './Reveal'

interface Category {
  name: string
  count: number
  blurb: string
  seed: string
}

const categories: Category[] = [
  {
    name: 'Running',
    count: 48,
    blurb: 'Performance shoes built for speed and endurance',
    seed: 'treadly-run-1',
  },
  {
    name: 'Sneakers',
    count: 86,
    blurb: 'Classic and contemporary streetwear styles',
    seed: 'treadly-sneak-1',
  },
  {
    name: 'Basketball',
    count: 32,
    blurb: 'Court-ready traction and lockdown support',
    seed: 'treadly-hoop-1',
  },
  {
    name: 'Casual',
    count: 64,
    blurb: 'Everyday comfort that goes with everything',
    seed: 'treadly-casual-1',
  },
  { name: 'Boots', count: 28, blurb: 'Durable builds for any weather', seed: 'treadly-boot-1' },
  {
    name: 'Sandals',
    count: 24,
    blurb: 'Lightweight slip-ons for warm days',
    seed: 'treadly-sandal-1',
  },
] as const

export function CategoryGrid() {
  return (
    <section id="shop" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Shop by Category
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Find the perfect pair for every occasion
              </p>
            </div>
            <a
              href="#shop"
              className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
            >
              View All
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.name} delay={index * 60}>
              <a
                href="#shop"
                className="group block overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={`https://picsum.photos/seed/${category.seed}/600/450`}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={450}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
                      {category.count} products
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{category.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors group-hover:text-primary-700 dark:text-primary-400">
                    Shop Now
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
