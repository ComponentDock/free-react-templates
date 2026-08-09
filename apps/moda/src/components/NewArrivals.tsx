import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

const arrivals = [
  { name: 'Cashmere Crewneck Sweater', category: 'Knitwear', price: 189, seed: 'moda-3' },
  { name: 'Minimalist Leather Sneakers', category: 'Footwear', price: 165, seed: 'moda-5' },
  { name: 'Printed Silk Scarf', category: 'Accessories', price: 125, seed: 'moda-10' },
  { name: 'Suede Chelsea Boots', category: 'Footwear', price: 285, seed: 'moda-11' },
] as const

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="bg-gray-50 py-16 dark:bg-gray-900 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Just Dropped
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                New Arrivals — Fresh styles added to our collection
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              See All New
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {arrivals.map((item) => (
              <article key={item.name} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
                  <img
                    src={`https://picsum.photos/seed/${item.seed}/800/1000`}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    New
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2 font-display text-lg font-bold text-gray-900 dark:text-white">
                    ${item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
