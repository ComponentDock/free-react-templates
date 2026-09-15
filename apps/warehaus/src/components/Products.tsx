import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

const CATEGORIES = ['All', 'Men', 'Women', 'Kids'] as const

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-pr1/400/500',
    category: 'Women',
  },
  {
    id: 2,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-pr2/400/500',
    category: 'Men',
  },
  {
    id: 3,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-pr3/400/500',
    category: 'Women',
  },
  {
    id: 4,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-pr4/400/500',
    category: 'Kids',
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered =
    activeCategory === 'All'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <section className="bg-light-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Products</h2>
        <div className="mb-8 flex justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-brand text-white'
                  : 'bg-white text-text-main hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{product.price}</p>
              </div>
              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
