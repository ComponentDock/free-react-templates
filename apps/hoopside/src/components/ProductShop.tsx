import { useState } from 'react'
import { Zap, ShoppingCart } from 'lucide-react'

const categories = ['All', 'Shoes', 'T-Shirt', 'Jacket', 'Accessories']

const products = [
  { name: 'Adidas Harden vol 4 Gila Monster', price: '91.00', seed: 'prod1' },
  { name: 'Nike LeBron 18 Low', price: '91.00', seed: 'prod2' },
  { name: 'Jordan Courtside 23', price: '91.00', seed: 'prod3' },
  { name: 'Puma MB.01 Basketball', price: '91.00', seed: 'prod4' },
]

export function ProductShop() {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <section className="bg-dark-bg py-16 text-white">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-primary" />
            <h2 className="font-heading text-2xl font-bold uppercase">Basketball Store</h2>
          </div>
          <div className="flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 font-heading text-xs uppercase transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-dark-muted text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => (
            <div key={p.seed} className="group overflow-hidden rounded bg-dark-card">
              <div className="relative aspect-square overflow-hidden bg-dark-muted">
                <img
                  src={`https://picsum.photos/seed/hoopside-${p.seed}/400/400`}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <button
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary opacity-0 transition-opacity group-hover:opacity-100"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={14} className="text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-sm font-semibold leading-tight text-gray-300">{p.name}</h3>
                <p className="font-heading text-lg font-bold text-primary">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
