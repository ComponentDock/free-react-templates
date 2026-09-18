import { useState } from 'react'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const tabs = ['All', 'Men', 'Women', 'Shoes'] as const
type Tab = (typeof tabs)[number]

const products = [
  {
    id: 1,
    name: 'Canvas Low-Top Sneaker',
    category: 'Shoes',
    price: 150,
    tags: ['Shoes'] as Tab[],
    seed: 'snowline-p1',
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    category: 'Women',
    price: 150,
    tags: ['Women'] as Tab[],
    seed: 'snowline-p2',
  },
  {
    id: 3,
    name: 'Sport Running Shoe',
    category: 'Shoes',
    price: 150,
    tags: ['Shoes', 'Women'] as Tab[],
    seed: 'snowline-p3',
  },
  {
    id: 4,
    name: 'Cotton Graphic Tee',
    category: 'Men',
    price: 150,
    tags: ['Men', 'Women'] as Tab[],
    seed: 'snowline-p4',
  },
  {
    id: 5,
    name: 'Slim Fit Chinos',
    category: 'Men',
    price: 150,
    tags: ['Men', 'Women'] as Tab[],
    seed: 'snowline-p5',
  },
  {
    id: 6,
    name: 'Leather Ankle Boot',
    category: 'Shoes',
    price: 150,
    tags: ['Shoes', 'Men'] as Tab[],
    seed: 'snowline-p6',
  },
] as const

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-brand-yellow text-brand-yellow" aria-hidden="true" />
      ))}
    </div>
  )
}

export function NewArrivals() {
  const [active, setActive] = useState<Tab>('All')

  const filtered = active === 'All' ? products : products.filter((p) => p.tags.includes(active))

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-3xl font-bold text-heading">New Arrival</h2>
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={cn(
                  'rounded px-4 py-1.5 text-sm font-medium transition-colors',
                  active === tab
                    ? 'bg-heading text-white'
                    : 'bg-gray-200 text-mist hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600',
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-sm bg-white">
              <img
                src={`https://picsum.photos/seed/${product.seed}/400/450`}
                alt={product.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <div className="flex translate-y-4 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-heading shadow transition-colors hover:bg-brand-pink hover:text-white"
                  >
                    <Heart className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to bag`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-heading shadow transition-colors hover:bg-brand-pink hover:text-white"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-mist">{product.category}</p>
                <h3 className="mt-1 text-sm font-semibold text-heading">{product.name}</h3>
                <StarRating />
                <p className="mt-1 text-sm font-bold text-heading">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
