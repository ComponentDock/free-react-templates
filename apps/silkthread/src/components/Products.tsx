import { useState } from 'react'
import { Heart, BarChart3, Eye } from 'lucide-react'

type Filter = 'Best Sellers' | 'New Arrivals' | 'Hot Sales'

interface Product {
  id: number
  name: string
  price: number
  label?: 'New' | 'Sale'
  rating: number
  colors: string[]
  image: string
  tag: 'new-arrivals' | 'hot-sales' | 'both'
}

const products: Product[] = [
  {
    id: 1,
    name: 'Piqué Biker Jacket',
    price: 67.24,
    label: 'New',
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod1/400/500',
    tag: 'new-arrivals',
  },
  {
    id: 2,
    name: 'Piqué Biker Jacket',
    price: 67.24,
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod2/400/500',
    tag: 'hot-sales',
  },
  {
    id: 3,
    name: 'Multi-pocket Chest Bag',
    price: 43.48,
    label: 'Sale',
    rating: 4,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod3/400/500',
    tag: 'new-arrivals',
  },
  {
    id: 4,
    name: 'Diagonal Textured Cap',
    price: 60.9,
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod4/400/500',
    tag: 'hot-sales',
  },
  {
    id: 5,
    name: 'Leather Backpack',
    price: 31.37,
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod5/400/500',
    tag: 'new-arrivals',
  },
  {
    id: 6,
    name: 'Ankle Boots',
    price: 98.49,
    label: 'Sale',
    rating: 4,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod6/400/500',
    tag: 'hot-sales',
  },
  {
    id: 7,
    name: 'T-shirt Contrast Pocket',
    price: 49.66,
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod7/400/500',
    tag: 'new-arrivals',
  },
  {
    id: 8,
    name: 'Basic Flowing Scarf',
    price: 26.28,
    rating: 0,
    colors: ['#c5a97e', '#111', '#888'],
    image: 'https://picsum.photos/seed/silkthread-prod8/400/500',
    tag: 'hot-sales',
  },
]

const filters: Filter[] = ['Best Sellers', 'New Arrivals', 'Hot Sales']

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-brand' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-sm bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.label && (
          <span
            className={`absolute left-3 top-3 rounded-sm px-3 py-1 text-xs font-bold uppercase text-white ${
              product.label === 'Sale' ? 'bg-brand' : 'bg-ink'
            }`}
          >
            {product.label}
          </span>
        )}
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            aria-label="Add to wishlist"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow transition-colors hover:bg-brand hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Compare"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow transition-colors hover:bg-brand hover:text-white"
          >
            <BarChart3 className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Quick view"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow transition-colors hover:bg-brand hover:text-white"
          >
            <Eye className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="text-sm font-bold text-ink">{product.name}</h6>
        <a
          href="#"
          className="mt-1 inline-block text-xs font-semibold uppercase text-body underline-offset-2 hover:underline hover:text-brand"
        >
          + Add To Cart
        </a>
        <Stars count={product.rating} />
        <p className="mt-1 text-base font-bold text-ink">${product.price.toFixed(2)}</p>
        <div className="mt-2 flex gap-1.5">
          {product.colors.map((color, i) => (
            <label
              key={i}
              className={`h-4 w-4 cursor-pointer rounded-full border-2 ${
                i === 1 ? 'border-ink ring-1 ring-ink' : 'border-rule'
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Color option ${i + 1}`}
            >
              <input
                type="radio"
                name={`color-${product.id}`}
                className="sr-only"
                defaultChecked={i === 1}
              />
            </label>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Products() {
  const [active, setActive] = useState<Filter>('Best Sellers')

  const filtered = products.filter((p) => {
    if (active === 'New Arrivals') return p.tag === 'new-arrivals'
    if (active === 'Hot Sales') return p.tag === 'hot-sales'
    return true
  })

  return (
    <section id="products" className="spad" aria-label="Products">
      <div className="mx-auto max-w-7xl px-4">
        <ul className="mb-10 flex justify-center gap-8" role="tablist">
          {filters.map((f) => (
            <li key={f} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={active === f}
                className={`cursor-pointer border-b-2 pb-1 text-sm font-bold uppercase tracking-wider transition-colors ${
                  active === f
                    ? 'border-ink text-ink'
                    : 'border-transparent text-body hover:text-ink'
                }`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
