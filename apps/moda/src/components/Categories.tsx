import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'

const categories = [
  { name: 'Clothing', count: 124, seed: 'moda-cat-1' },
  { name: 'Accessories', count: 86, seed: 'moda-cat-2' },
  { name: 'Footwear', count: 52, seed: 'moda-cat-3' },
  { name: 'Bags', count: 38, seed: 'moda-cat-4' },
  { name: 'Jewelry', count: 64, seed: 'moda-cat-5' },
  { name: 'Watches', count: 28, seed: 'moda-cat-6' },
] as const

export function Categories() {
  return (
    <section id="categories" className="bg-gray-50 py-16 dark:bg-gray-900 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
              Explore our curated collections across fashion, accessories, and more.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <a
                key={category.name}
                href="#"
                className="group relative block overflow-hidden rounded-2xl bg-gray-200 dark:bg-gray-800"
              >
                <img
                  src={`https://picsum.photos/seed/${category.seed}/600/400`}
                  alt={category.name}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-300">{category.count} Products</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Shop Now
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
