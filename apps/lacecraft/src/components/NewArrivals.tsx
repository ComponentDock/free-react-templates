import { Star, ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface NewProduct {
  id: number
  name: string
  category: string
  price: number
  rating: number
  colors: number
  image: string
}

const newProducts: NewProduct[] = [
  {
    id: 1,
    name: 'Ultraboost Lite',
    category: 'Running',
    price: 179.99,
    rating: 4.7,
    colors: 3,
    image: 'https://picsum.photos/seed/lacecraft-new-1/400/400',
  },
  {
    id: 2,
    name: 'Retro Low Classic',
    category: 'Sneakers',
    price: 119.99,
    rating: 4.5,
    colors: 5,
    image: 'https://picsum.photos/seed/lacecraft-new-2/400/400',
  },
  {
    id: 3,
    name: 'Stratus Walk',
    category: 'Sandals',
    price: 89.99,
    rating: 4.3,
    colors: 2,
    image: 'https://picsum.photos/seed/lacecraft-new-3/400/400',
  },
  {
    id: 4,
    name: 'Dunk Fury SE',
    category: 'Basketball',
    price: 199.99,
    rating: 4.8,
    colors: 4,
    image: 'https://picsum.photos/seed/lacecraft-new-4/400/400',
  },
]

export function NewArrivals() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              Just Dropped
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              New Arrivals
            </h2>
          </div>
          <a
            href="#new-arrivals-all"
            className="text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            Shop New Arrivals →
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((p) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <span className="absolute left-3 top-3 z-10 rounded-full bg-gray-900 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-gray-900">
                NEW
              </span>
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-600"
                  >
                    <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-medium uppercase text-primary-500">{p.category}</p>
                <h3 className="mt-1 font-display text-base font-semibold text-gray-900 dark:text-white">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={cn(
                        'h-3.5 w-3.5',
                        s <= Math.round(p.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold text-gray-900 dark:text-white">${p.price}</span>
                  <span className="text-xs text-gray-400">{p.colors} colors</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
