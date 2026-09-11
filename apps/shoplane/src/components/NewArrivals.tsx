import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  badge?: 'sale' | 'new'
  seed: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fujifilm X100T 16 MP Digital Camera',
    price: 520,
    originalPrice: 590,
    category: 'men',
    badge: 'sale',
    seed: 'shoplane-prod1',
  },
  {
    id: 2,
    name: 'Samsung CF591 Series Curved Monitor',
    price: 610,
    category: 'women',
    badge: 'new',
    seed: 'shoplane-prod2',
  },
  {
    id: 3,
    name: 'Blue Yeti USB Microphone',
    price: 120,
    category: 'women',
    seed: 'shoplane-prod3',
  },
  {
    id: 4,
    name: 'DYMO LabelWriter 450 Turbo',
    price: 410,
    category: 'accessories',
    badge: 'sale',
    seed: 'shoplane-prod4',
  },
  {
    id: 5,
    name: 'Pryma Headphones, Rose Gold',
    price: 180,
    category: 'women',
    seed: 'shoplane-prod5',
  },
  {
    id: 6,
    name: 'Canon EOS 80D Digital Camera',
    price: 699,
    originalPrice: 799,
    category: 'accessories',
    badge: 'sale',
    seed: 'shoplane-prod6',
  },
  {
    id: 7,
    name: 'Sony WH-1000XM4 Headphones',
    price: 350,
    category: 'women',
    seed: 'shoplane-prod7',
  },
  {
    id: 8,
    name: 'Logitech MX Master 3 Mouse',
    price: 100,
    category: 'accessories',
    seed: 'shoplane-prod8',
  },
  {
    id: 9,
    name: 'Apple MacBook Pro 13-inch',
    price: 1299,
    category: 'men',
    badge: 'sale',
    seed: 'shoplane-prod9',
  },
  { id: 10, name: 'JBL Charge 5 Speaker', price: 180, category: 'men', seed: 'shoplane-prod10' },
]

const filters = [
  { label: 'All', value: 'all' },
  { label: "Women's", value: 'women' },
  { label: 'Accessories', value: 'accessories' },
  { label: "Men's", value: 'men' },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group text-center">
      <div className="relative mb-3 overflow-hidden rounded bg-gray-50">
        <img
          src={`https://picsum.photos/seed/${product.seed}/300/300`}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={cn(
              'absolute left-2 top-2 rounded px-2 py-0.5 text-xs font-bold uppercase text-white',
              product.badge === 'sale' ? 'bg-green-500' : 'bg-coral-500',
            )}
          >
            {product.badge}
          </span>
        )}
      </div>
      <h6 className="mb-1 text-sm font-medium text-gray-800">{product.name}</h6>
      <div className="text-sm text-gray-500">
        <span className="font-semibold text-gray-900">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="ml-1 text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>
      <a
        href="#cart"
        className="mt-2 inline-block rounded bg-coral-500 px-5 py-1.5 text-xs font-semibold uppercase text-white transition-colors hover:bg-coral-400"
      >
        Add to Cart
      </a>
    </div>
  )
}

export function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter)

  return (
    <section id="shop" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">New Arrivals</h2>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setActiveFilter(f.value)}
              className={cn(
                'rounded px-5 py-2 text-sm font-medium transition-colors',
                activeFilter === f.value
                  ? 'bg-coral-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
