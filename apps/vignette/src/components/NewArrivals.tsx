import { useState } from 'react'
import { Plus } from 'lucide-react'

type Category = 'all' | 'women' | 'men' | 'accessories' | 'shoes' | 'kids'

const filters: ReadonlyArray<{ label: string; value: Category }> = [
  { label: 'ALL', value: 'all' },
  { label: 'WOMEN', value: 'women' },
  { label: 'MAN', value: 'men' },
  { label: 'ACCESSORIES', value: 'accessories' },
  { label: 'SHOES', value: 'shoes' },
  { label: 'KIDS', value: 'kids' },
]

interface Product {
  id: number
  name: string
  price: string
  image: string
  category: Exclude<Category, 'all'> | 'women' | 'men'
}

const products: ReadonlyArray<Product> = [
  {
    id: 1,
    name: 'Jeans midi cocktail dress',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p1/400/500',
    category: 'women',
  },
  {
    id: 2,
    name: 'Elegant summer dress',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p2/400/500',
    category: 'women',
  },
  {
    id: 3,
    name: 'Leather crossbody bag',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p3/400/500',
    category: 'accessories',
  },
  {
    id: 4,
    name: 'Classic canvas sneakers',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p4/400/500',
    category: 'shoes',
  },
  {
    id: 5,
    name: 'Striped casual shirt',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p5/400/500',
    category: 'women',
  },
  {
    id: 6,
    name: 'Kids floral dress',
    price: '$39.90',
    image: 'https://picsum.photos/seed/vignette-p6/400/500',
    category: 'kids',
  },
]

export function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState<Category>('all')

  const filtered =
    activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter)

  return (
    <section aria-label="New arrivals" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink">New Arrivals</h2>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                activeFilter === f.value
                  ? 'bg-brand text-white'
                  : 'bg-gray-100 text-ink hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label={`Quick view ${product.name}`}
                  className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-lg">
                    <Plus className="h-5 w-5" />
                  </span>
                </button>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-bold text-brand">{product.price}</h4>
                <p className="mt-1 text-sm text-mist">{product.name}</p>
                <a
                  href="#cart"
                  className="mt-3 inline-block text-xs font-bold uppercase tracking-wider text-ink underline transition-colors hover:text-brand"
                >
                  ADD TO CART
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
