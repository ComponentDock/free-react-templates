import { useState } from 'react'
import { Search, ShoppingCart, Heart } from 'lucide-react'

const filters = ['All', 'Bouquet', 'Flower box', 'Flower shelf', 'Basket', 'Gift combos']

type Category = 'bouquet' | 'flower-box' | 'flower-shelf' | 'basket' | 'gift'

interface Product {
  name: string
  price: string
  category: Category
  seed: string
  label?: string
}

const products: Product[] = [
  {
    name: 'Fly Me To The Moon',
    price: '$27.50',
    category: 'bouquet',
    seed: 'petal-p1',
    label: 'New',
  },
  { name: 'Rose Garden Delight', price: '$32.00', category: 'flower-box', seed: 'petal-p2' },
  {
    name: 'Spring Blossom',
    price: '$24.50',
    category: 'flower-shelf',
    seed: 'petal-p3',
    label: 'Sale',
  },
  { name: 'Wild Meadow Mix', price: '$29.00', category: 'basket', seed: 'petal-p4' },
  { name: 'Sunset Bouquet', price: '$35.00', category: 'gift', seed: 'petal-p5' },
  { name: 'Pink Paradise', price: '$27.50', category: 'bouquet', seed: 'petal-p6' },
  {
    name: 'Desert Bloom',
    price: '$22.00',
    category: 'flower-box',
    seed: 'petal-p7',
    label: 'Out of Stock',
  },
  {
    name: 'Lavender Dreams',
    price: '$31.00',
    category: 'flower-shelf',
    seed: 'petal-p8',
    label: 'New',
  },
  { name: 'Harvest Basket', price: '$28.00', category: 'basket', seed: 'petal-p9' },
  { name: 'Love Package', price: '$45.00', category: 'gift', seed: 'petal-p10', label: 'New' },
]

const filterMap: Record<string, Category | 'all'> = {
  All: 'all',
  Bouquet: 'bouquet',
  'Flower box': 'flower-box',
  'Flower shelf': 'flower-shelf',
  Basket: 'basket',
  'Gift combos': 'gift',
}

export function Arrivals() {
  const [active, setActive] = useState('All')
  const filterKey = filterMap[active]
  const visible = filterKey === 'all' ? products : products.filter((p) => p.category === filterKey)

  return (
    <section id="shop" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-rose-400">
            Our flower
          </span>
          <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
        </div>

        <ul className="mb-10 flex flex-wrap justify-center gap-3" role="tablist">
          {filters.map((f) => (
            <li key={f} role="presentation">
              <button
                role="tab"
                aria-selected={active === f}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === f
                    ? 'bg-rose-400 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {visible.map((p) => (
            <div key={p.name + p.seed} className="group">
              <div className="relative mb-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/300/300`}
                  alt={p.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {p.label && (
                  <span className="absolute left-3 top-3 rounded bg-rose-400 px-2 py-1 text-xs font-semibold text-white">
                    {p.label}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                  <button
                    aria-label="Search"
                    className="rounded-full bg-white p-2 text-gray-700 hover:text-rose-400"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Add to cart"
                    className="rounded-full bg-white p-2 text-gray-700 hover:text-rose-400"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Add to wishlist"
                    className="rounded-full bg-white p-2 text-gray-700 hover:text-rose-400"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <h5 className="mb-1 text-sm font-semibold text-gray-900">{p.name}</h5>
              <div className="mb-2 text-sm font-bold text-rose-400">{p.price}</div>
              <button className="w-full rounded bg-gray-900 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-rose-400">
                Add to cart
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#shop"
            className="inline-block border-2 border-rose-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-rose-400 transition-colors hover:bg-rose-400 hover:text-white"
          >
            View all products
          </a>
        </div>
      </div>
    </section>
  )
}
