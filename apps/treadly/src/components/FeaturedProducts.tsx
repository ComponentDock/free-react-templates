import { ChevronRight } from 'lucide-react'
import { ProductCard } from './ProductCard'
import { Reveal } from './Reveal'

interface Product {
  name: string
  price: number
  rating: number
  seed: string
  badge?: string
}

const products: Product[] = [
  {
    name: 'Velocity Runner Pro',
    price: 179,
    rating: 4.9,
    seed: 'treadly-vel-1',
    badge: 'Best Seller',
  },
  { name: 'Streetwise Classic', price: 219, rating: 4.8, seed: 'treadly-street-1' },
  { name: 'Court Dominator X', price: 129, rating: 4.7, seed: 'treadly-court-1' },
  { name: 'Trail Blazer GTX', price: 199, rating: 4.9, seed: 'treadly-trail-1' },
  { name: 'Marathon Elite', price: 189, rating: 5.0, seed: 'treadly-marathon-1' },
  { name: 'Cloud 9 Recovery', price: 229, rating: 4.6, seed: 'treadly-cloud-1' },
  { name: 'Court Legacy Low', price: 249, rating: 4.5, seed: 'treadly-legacy-1' },
] as const

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-gray-100 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Featured Collection
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Our most popular styles handpicked for you
              </p>
            </div>
            <a
              href="#featured"
              className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
            >
              View All Featured
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={(index % 4) * 60}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
