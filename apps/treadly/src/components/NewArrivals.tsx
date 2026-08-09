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
  { name: 'Court Dominator X', price: 129, rating: 4.7, seed: 'treadly-court-1', badge: 'New' },
  { name: 'Summer Slide Sport', price: 59, rating: 4.6, seed: 'treadly-slide-1', badge: 'New' },
  { name: 'Marathon Elite', price: 189, rating: 5.0, seed: 'treadly-marathon-1', badge: 'New' },
  { name: 'Cloud 9 Recovery', price: 229, rating: 4.6, seed: 'treadly-cloud-1', badge: 'New' },
] as const

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                New Arrivals
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Fresh drops, straight from the design studio
              </p>
            </div>
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
            >
              Shop New Arrivals
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.name} delay={index * 60}>
              <ProductCard {...product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
