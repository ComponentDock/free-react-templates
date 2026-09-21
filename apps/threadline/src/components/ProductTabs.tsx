import { useState } from 'react'
import { ShoppingBag, GitCompare } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  seed: string
  isNew?: boolean
  isSale?: boolean
}

const bestSellers: Product[] = [
  { id: 1, name: 'Piqué Biker Jacket', price: 67.24, seed: 'threadline-p1' },
  { id: 2, name: 'Multi-pocket Chest Bag', price: 43.48, seed: 'threadline-p2', isSale: true },
  { id: 3, name: 'Diagonal Textured Cap', price: 60.9, seed: 'threadline-p3' },
  { id: 4, name: 'Leather Backpack', price: 31.37, seed: 'threadline-p4' },
]

const newArrivals: Product[] = [
  {
    id: 5,
    name: 'Ankle Boots',
    price: 98.49,
    originalPrice: 120.0,
    seed: 'threadline-p5',
    isSale: true,
  },
  { id: 6, name: 'T-shirt Contrast Pocket', price: 49.66, seed: 'threadline-p6', isNew: true },
  { id: 7, name: 'Basic Flowing Scarf', price: 26.28, seed: 'threadline-p7', isNew: true },
  { id: 8, name: 'Slim Fit Chinos', price: 55.0, seed: 'threadline-p8', isNew: true },
]

const hotSales: Product[] = [
  {
    id: 9,
    name: 'Wool Blend Coat',
    price: 89.99,
    originalPrice: 149.99,
    seed: 'threadline-p9',
    isSale: true,
  },
  { id: 10, name: 'Classic Oxford Shirt', price: 34.5, seed: 'threadline-p10', isSale: true },
  {
    id: 11,
    name: 'Leather Belt',
    price: 22.0,
    originalPrice: 35.0,
    seed: 'threadline-p11',
    isSale: true,
  },
  {
    id: 12,
    name: 'Canvas Sneakers',
    price: 45.0,
    originalPrice: 65.0,
    seed: 'threadline-p12',
    isSale: true,
  },
]

const tabs = [
  { key: 'best', label: 'Best Sellers', products: bestSellers },
  { key: 'new', label: 'New Arrivals', products: newArrivals },
  { key: 'hot', label: 'Hot Sales', products: hotSales },
]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-lg bg-surface-alt">
        <div
          className="aspect-square bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundImage: `url(https://picsum.photos/seed/${product.seed}/300/300)` }}
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Sale
          </span>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            aria-label="Compare"
            className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
          >
            <GitCompare size={16} />
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-semibold text-gray-800">{product.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-brand-500 font-bold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Button className="mt-2 bg-surface-dark hover:bg-gray-800 text-white text-xs font-semibold uppercase px-4 py-2 rounded inline-flex items-center gap-1 transition-colors">
          <ShoppingBag size={14} /> Add To Cart
        </Button>
      </div>
    </div>
  )
}

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState('best')
  const activeProducts = tabs.find((t) => t.key === activeTab)!.products

  return (
    <section className="py-16 bg-surface-alt" aria-label="Product listings">
      <div className="container mx-auto px-4">
        {/* Tab headers */}
        <div className="flex items-center justify-center gap-8 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-sm font-bold uppercase tracking-wide pb-2 border-b-2 transition-colors ${
                activeTab === tab.key
                  ? 'text-surface-dark border-surface-dark'
                  : 'text-gray-400 border-transparent hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {activeProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
