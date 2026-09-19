import { useState } from 'react'
import { ProductCard } from './ProductCard'

const tabs = ['New Arrivals', 'Best Sellers', 'Trending']

const products = [
  {
    image: 'https://picsum.photos/seed/feat1/400/500',
    name: 'Slim Fit Chinos',
    originalPrice: 75,
    salePrice: 55,
    category: "Men's",
  },
  {
    image: 'https://picsum.photos/seed/feat2/400/500',
    name: 'Silk Blouse',
    originalPrice: 110,
    salePrice: 85,
    category: "Women's",
  },
  {
    image: 'https://picsum.photos/seed/feat3/400/500',
    name: 'Cotton Polo Shirt',
    originalPrice: 60,
    salePrice: 42,
    category: "Men's",
  },
  {
    image: 'https://picsum.photos/seed/feat4/400/500',
    name: 'Knit Cardigan',
    originalPrice: 90,
    salePrice: 68,
    category: "Women's",
  },
]

export function FeaturedProducts() {
  const [active, setActive] = useState(0)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-extrabold text-text-dark text-center mb-2">Featured Products</h2>
      <p className="text-text-secondary text-center text-sm mb-6">
        Curated picks for every occasion
      </p>
      <div className="flex items-center justify-center gap-6 mb-8 border-b border-border">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors border-b-2 ${
              active === i
                ? 'border-brand text-text-dark'
                : 'border-transparent text-text-secondary hover:text-text-dark'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  )
}
