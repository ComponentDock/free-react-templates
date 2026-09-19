import { useState } from 'react'
import { ProductCard } from './ProductCard'

const categories = ['All', "Men's", "Women's", "Kid's", 'Accessories']

const products = [
  {
    image: 'https://picsum.photos/seed/prod1/400/500',
    name: 'Classic Denim Jacket',
    originalPrice: 120,
    salePrice: 89,
    category: "Men's",
  },
  {
    image: 'https://picsum.photos/seed/prod2/400/500',
    name: 'Floral Summer Dress',
    originalPrice: 95,
    salePrice: 65,
    category: "Women's",
  },
  {
    image: 'https://picsum.photos/seed/prod3/400/500',
    name: 'Kids Rainbow Hoodie',
    originalPrice: 55,
    salePrice: 39,
    category: "Kid's",
  },
  {
    image: 'https://picsum.photos/seed/prod4/400/500',
    name: 'Leather Crossbody Bag',
    originalPrice: 80,
    salePrice: 59,
    category: 'Accessories',
  },
]

export function TrendingProducts() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-extrabold text-text-dark text-center mb-2">Discover More</h2>
      <p className="text-text-secondary text-center text-sm mb-6">
        Find your style from our trending collection
      </p>
      <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              active === cat
                ? 'bg-brand border-brand text-dark-deep'
                : 'border-border text-text-secondary hover:border-brand hover:text-brand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
