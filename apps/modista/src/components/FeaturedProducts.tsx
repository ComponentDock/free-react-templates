import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

const featuredProducts = [
  {
    id: 101,
    name: 'Classic Watch',
    price: 199,
    image: 'https://picsum.photos/seed/modista-fp1/80/80',
  },
  {
    id: 102,
    name: 'Leather Belt',
    price: 45,
    image: 'https://picsum.photos/seed/modista-fp2/80/80',
  },
  {
    id: 103,
    name: 'Polarized Shades',
    price: 89,
    image: 'https://picsum.photos/seed/modista-fp3/80/80',
  },
  { id: 104, name: 'Silk Tie', price: 35, image: 'https://picsum.photos/seed/modista-fp4/80/80' },
] as const

const tabs = ["Men's", 'Woman', 'Shoes', 'Bags'] as const

type TabName = (typeof tabs)[number]

interface Product {
  id: number
  name: string
  price: number
  badge: string | null
  category: TabName
  image: string
}

const allProducts: Product[] = [
  {
    id: 201,
    name: 'Winter Parka',
    price: 189,
    badge: 'Sale',
    category: "Men's",
    image: 'https://picsum.photos/seed/modista-fp-a/300/350',
  },
  {
    id: 202,
    name: 'Summer Dress',
    price: 79,
    badge: 'New',
    category: 'Woman',
    image: 'https://picsum.photos/seed/modista-fp-b/300/350',
  },
  {
    id: 203,
    name: 'Running Sneakers',
    price: 120,
    badge: '-10%',
    category: 'Shoes',
    image: 'https://picsum.photos/seed/modista-fp-c/300/350',
  },
  {
    id: 204,
    name: 'Crossbody Bag',
    price: 65,
    badge: null,
    category: 'Bags',
    image: 'https://picsum.photos/seed/modista-fp-d/300/350',
  },
  {
    id: 205,
    name: 'Casual Blazer',
    price: 145,
    badge: 'New',
    category: "Men's",
    image: 'https://picsum.photos/seed/modista-fp-e/300/350',
  },
  {
    id: 206,
    name: 'Floral Skirt',
    price: 55,
    badge: 'Sale',
    category: 'Woman',
    image: 'https://picsum.photos/seed/modista-fp-f/300/350',
  },
  {
    id: 207,
    name: 'Ankle Boots',
    price: 110,
    badge: 'Hot',
    category: 'Shoes',
    image: 'https://picsum.photos/seed/modista-fp-g/300/350',
  },
  {
    id: 208,
    name: 'Tote Bag',
    price: 80,
    badge: '-10%',
    category: 'Bags',
    image: 'https://picsum.photos/seed/modista-fp-h/300/350',
  },
]

const badgeColors: Record<string, string> = {
  Sale: 'bg-brand-red',
  New: 'bg-green-600',
  '-10%': 'bg-brand-red',
}

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<TabName>("Men's")

  const filteredProducts = allProducts.filter((p) => p.category === activeTab)

  return (
    <section className="mx-auto max-w-[1140px] px-4 py-12" aria-label="Featured products">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left sidebar */}
        <div className="w-full lg:w-1/4">
          <h2 className="mb-6 font-heading text-lg font-bold uppercase tracking-wide text-text-heading">
            Featured Products
          </h2>
          <div className="space-y-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-3">
                <img src={product.image} alt={product.name} className="h-16 w-16 object-cover" />
                <div>
                  <h3 className="text-sm font-medium text-text-primary">{product.name}</h3>
                  <span className="text-sm text-text-secondary">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right main area */}
        <div className="w-full lg:w-3/4">
          {/* Filter tabs */}
          <div
            className="mb-6 flex flex-wrap gap-4 border-b border-border-light pb-4"
            role="tablist"
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? 'text-brand-red border-b-2 border-brand-red'
                    : 'text-text-secondary hover:text-brand-red'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4" role="tabpanel">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[250px] w-full object-cover"
                  />
                  {product.badge && (
                    <span
                      className={`absolute left-2 top-2 rounded-[3px] px-2 py-0.5 text-xs font-semibold text-white ${badgeColors[product.badge] ?? 'bg-brand-red'}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="mt-3">
                  <button className="w-full bg-brand-dark py-2 text-xs font-semibold text-white transition-colors hover:bg-transparent hover:text-brand-dark border border-brand-dark">
                    <ShoppingCart className="mr-1 inline h-3 w-3" />
                    Add To Cart
                  </button>
                </div>
                <h3 className="mt-2 text-sm font-medium text-text-primary">{product.name}</h3>
                <span className="text-sm text-text-secondary">${product.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
