import { useState } from 'react'

const tabs = ['All', 'Bouquet', 'Flower box', 'Flower shelf', 'Basket', 'Gift combos'] as const

const products = [
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: 'New',
    category: 'Bouquet',
    image: 'https://picsum.photos/seed/bloomfield-p1/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: '',
    category: 'Flower box',
    image: 'https://picsum.photos/seed/bloomfield-p2/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: 'Sale',
    category: 'Flower shelf',
    image: 'https://picsum.photos/seed/bloomfield-p3/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: '',
    category: 'Basket',
    image: 'https://picsum.photos/seed/bloomfield-p4/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: '',
    category: 'Gift combos',
    image: 'https://picsum.photos/seed/bloomfield-p5/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: '',
    category: 'Bouquet',
    image: 'https://picsum.photos/seed/bloomfield-p6/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: 'Out of stock',
    category: 'Flower box',
    image: 'https://picsum.photos/seed/bloomfield-p7/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: 'New',
    category: 'Flower shelf',
    image: 'https://picsum.photos/seed/bloomfield-p8/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: '',
    category: 'Basket',
    image: 'https://picsum.photos/seed/bloomfield-p9/400/400',
  },
  {
    name: 'Fly Me To The Moon',
    price: 27.5,
    badge: 'New',
    category: 'Gift combos',
    image: 'https://picsum.photos/seed/bloomfield-p10/400/400',
  },
]

export function NewArrivals() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All' ? products : products.filter((p) => p.category === activeTab)

  return (
    <section id="shop" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header + tabs */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-[4px] text-bloom-400">
            Our flower
          </span>
          <h2
            className="mb-8 text-3xl font-normal text-gray-900 sm:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            New Arrivals
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? 'bg-bloom-400 text-white'
                    : 'bg-white text-gray-600 hover:bg-bloom-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {p.badge && (
                  <span
                    className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase ${
                      p.badge === 'Sale'
                        ? 'bg-green-500 text-white'
                        : p.badge === 'Out of stock'
                          ? 'bg-gray-800 text-white'
                          : 'bg-bloom-400 text-white'
                    }`}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h5
                  className="mb-1 text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {p.name}
                </h5>
                <p className="mb-3 text-bloom-400 font-semibold">${p.price.toFixed(2)}</p>
                <button className="rounded-full border-2 border-gray-200 px-6 py-2 text-xs font-bold uppercase tracking-widest text-gray-700 transition-colors hover:border-bloom-400 hover:text-bloom-400">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-full border-2 border-bloom-400 px-8 py-3 text-sm font-bold uppercase tracking-widest text-bloom-400 transition-colors hover:bg-bloom-400 hover:text-white"
          >
            View all products
          </a>
        </div>
      </div>
    </section>
  )
}
