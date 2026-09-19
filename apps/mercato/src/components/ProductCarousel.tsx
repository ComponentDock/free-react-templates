import { ShoppingBag, Heart, RefreshCw, Eye } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  oldPrice: number
  image: string
}

const latestProducts: Product[] = [
  {
    id: 1,
    name: 'Running Shoes Pro',
    price: 150,
    oldPrice: 210,
    image: 'https://picsum.photos/seed/mercato-p1/400/400',
  },
  {
    id: 2,
    name: 'Sport Sneakers X',
    price: 120,
    oldPrice: 180,
    image: 'https://picsum.photos/seed/mercato-p2/400/400',
  },
  {
    id: 3,
    name: 'Training Boots',
    price: 180,
    oldPrice: 250,
    image: 'https://picsum.photos/seed/mercato-p3/400/400',
  },
  {
    id: 4,
    name: 'Comfort Walkers',
    price: 90,
    oldPrice: 130,
    image: 'https://picsum.photos/seed/mercato-p4/400/400',
  },
]

const comingProducts: Product[] = [
  {
    id: 5,
    name: 'Urban Trail Elite',
    price: 200,
    oldPrice: 280,
    image: 'https://picsum.photos/seed/mercato-p5/400/400',
  },
  {
    id: 6,
    name: 'Speed Runner V2',
    price: 160,
    oldPrice: 220,
    image: 'https://picsum.photos/seed/mercato-p6/400/400',
  },
  {
    id: 7,
    name: 'Marathon Edition',
    price: 175,
    oldPrice: 240,
    image: 'https://picsum.photos/seed/mercato-p7/400/400',
  },
  {
    id: 8,
    name: 'Flex Comfort Max',
    price: 110,
    oldPrice: 160,
    image: 'https://picsum.photos/seed/mercato-p8/400/400',
  },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800">
      <div className="relative mb-3 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-3 bg-gradient-to-t from-brand/90 to-brand/70 py-3 transition-transform group-hover:translate-y-0">
          <button aria-label="Add to bag" className="text-white hover:text-white/80">
            <ShoppingBag size={16} />
          </button>
          <button aria-label="Wishlist" className="text-white hover:text-white/80">
            <Heart size={16} />
          </button>
          <button aria-label="Compare" className="text-white hover:text-white/80">
            <RefreshCw size={16} />
          </button>
          <button aria-label="View more" className="text-white hover:text-white/80">
            <Eye size={16} />
          </button>
        </div>
      </div>
      <h6 className="mb-1 text-sm font-medium text-heading dark:text-white">{product.name}</h6>
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold text-heading dark:text-white">
          ${product.price}.00
        </span>
        <span className="text-xs text-ink line-through dark:text-gray-400">
          ${product.oldPrice}.00
        </span>
      </div>
    </div>
  )
}

export function ProductCarousel() {
  const [activeTab, setActiveTab] = useState<'latest' | 'coming'>('latest')
  const products = activeTab === 'latest' ? latestProducts : comingProducts

  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <div className="mb-4 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('latest')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeTab === 'latest'
                  ? 'bg-gradient-to-r from-brand to-brand-dark text-white'
                  : 'bg-bg-light text-ink hover:bg-brand/10 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              Latest Products
            </button>
            <button
              onClick={() => setActiveTab('coming')}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                activeTab === 'coming'
                  ? 'bg-gradient-to-r from-brand to-brand-dark text-white'
                  : 'bg-bg-light text-ink hover:bg-brand/10 dark:bg-gray-800 dark:text-gray-300'
              }`}
            >
              Coming Products
            </button>
          </div>
          <h2 className="font-heading text-3xl font-bold text-heading dark:text-white">
            {activeTab === 'latest' ? 'Latest Products' : 'Coming Products'}
          </h2>
          <p className="mt-2 text-ink dark:text-gray-400">
            Discover our newest collection of premium sportswear
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
