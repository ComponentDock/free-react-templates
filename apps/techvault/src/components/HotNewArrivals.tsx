import { useState } from 'react'
import { Star } from 'lucide-react'

const TABS = ['New Arrivals', 'Featured', 'Sale']

const ARRIVALS = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 79,
    originalPrice: 99,
    image: 'https://picsum.photos/seed/techvault-arr1/300/300',
    rating: 4,
    tag: 'New',
  },
  {
    id: 2,
    name: 'Laptop Stand',
    price: 45,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-arr2/300/300',
    rating: 5,
    tag: 'New',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 55,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-arr3/300/300',
    rating: 4,
    tag: 'New',
  },
  {
    id: 4,
    name: 'Screen Protector',
    price: 12,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-arr4/300/300',
    rating: 3,
    tag: 'New',
  },
]

const FEATURED = [
  {
    id: 5,
    name: 'Gaming Headset',
    price: 149,
    originalPrice: 199,
    image: 'https://picsum.photos/seed/techvault-feat1/300/300',
    rating: 5,
    tag: 'Featured',
  },
  {
    id: 6,
    name: 'Wireless Charger',
    price: 35,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-feat2/300/300',
    rating: 4,
    tag: 'Featured',
  },
  {
    id: 7,
    name: 'Smart Plug',
    price: 25,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-feat3/300/300',
    rating: 4,
    tag: 'Featured',
  },
  {
    id: 8,
    name: 'USB Microphone',
    price: 89,
    originalPrice: null,
    image: 'https://picsum.photos/seed/techvault-feat4/300/300',
    rating: 5,
    tag: 'Featured',
  },
]

const SALE = [
  {
    id: 9,
    name: 'Tablet Case',
    price: 15,
    originalPrice: 30,
    image: 'https://picsum.photos/seed/techvault-sale1/300/300',
    rating: 3,
    tag: 'Sale',
  },
  {
    id: 10,
    name: 'Phone Mount',
    price: 18,
    originalPrice: 25,
    image: 'https://picsum.photos/seed/techvault-sale2/300/300',
    rating: 4,
    tag: 'Sale',
  },
  {
    id: 11,
    name: 'Cable Organizer',
    price: 8,
    originalPrice: 15,
    image: 'https://picsum.photos/seed/techvault-sale3/300/300',
    rating: 4,
    tag: 'Sale',
  },
  {
    id: 12,
    name: 'Car Charger',
    price: 12,
    originalPrice: 20,
    image: 'https://picsum.photos/seed/techvault-sale4/300/300',
    rating: 3,
    tag: 'Sale',
  },
]

const TAB_DATA = [ARRIVALS, FEATURED, SALE]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function HotNewArrivals() {
  const [activeTab, setActiveTab] = useState(0)
  const products = TAB_DATA[activeTab]!

  return (
    <section className="bg-mist py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center gap-6">
          <h2 className="font-display text-2xl font-bold text-ink">Hot New Arrivals</h2>
          <div className="flex gap-1 border-b-2 border-gray-200">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`border-b-2 px-4 py-2 font-display text-sm font-semibold transition-colors ${
                  activeTab === i
                    ? 'border-primary-400 text-primary-400'
                    : 'border-transparent text-smoke hover:text-ink'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-lg border border-gray-100 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div className="relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-contain"
                />
                <span className="absolute left-2 top-2 rounded bg-primary-400 px-2 py-0.5 text-[10px] font-bold text-white">
                  {product.tag}
                </span>
              </div>
              <Stars count={product.rating} />
              <h3 className="mt-2 font-display text-sm font-bold text-ink">{product.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                {product.originalPrice && (
                  <span className="text-sm text-smoke line-through">${product.originalPrice}</span>
                )}
                <span className="text-lg font-bold text-primary-400">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
