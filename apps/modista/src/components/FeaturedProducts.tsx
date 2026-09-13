import { useState } from 'react'

const tabs = ["Men's", 'Woman', 'Shoes', 'Bags'] as const

const allProducts = [
  {
    id: 1,
    name: 'Down Jacket',
    price: 120,
    oldPrice: 150,
    image: 'https://picsum.photos/seed/modista-fp1/400/500',
    badge: 'Sale',
    badgeColor: 'bg-brand-red',
    category: "Men's",
  },
  {
    id: 2,
    name: 'Summer Dress',
    price: 65,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp2/400/500',
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'Woman',
  },
  {
    id: 3,
    name: 'Sport Shoes',
    price: 110,
    oldPrice: 120,
    image: 'https://picsum.photos/seed/modista-fp3/400/500',
    badge: '-10%',
    badgeColor: 'bg-amber-500',
    category: 'Shoes',
  },
  {
    id: 4,
    name: 'Designer Bag',
    price: 180,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp4/400/500',
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'Bags',
  },
  {
    id: 5,
    name: 'Casual Hoodie',
    price: 80,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp5/400/500',
    badge: '',
    badgeColor: '',
    category: "Men's",
  },
  {
    id: 6,
    name: 'Leather Jacket',
    price: 200,
    oldPrice: 250,
    image: 'https://picsum.photos/seed/modista-fp6/400/500',
    badge: 'Sale',
    badgeColor: 'bg-brand-red',
    category: "Men's",
  },
  {
    id: 7,
    name: 'High Heels',
    price: 90,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp7/400/500',
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'Shoes',
  },
  {
    id: 8,
    name: 'Crossbody Bag',
    price: 140,
    oldPrice: 160,
    image: 'https://picsum.photos/seed/modista-fp8/400/500',
    badge: '-10%',
    badgeColor: 'bg-amber-500',
    category: 'Bags',
  },
  {
    id: 9,
    name: 'Silk Blouse',
    price: 75,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp9/400/500',
    badge: 'New',
    badgeColor: 'bg-green-500',
    category: 'Woman',
  },
  {
    id: 10,
    name: 'Canvas Sneakers',
    price: 55,
    oldPrice: null,
    image: 'https://picsum.photos/seed/modista-fp10/400/500',
    badge: '',
    badgeColor: '',
    category: 'Shoes',
  },
] as const

const featuredItems = [
  { name: 'Down Jacket', price: 120, image: 'https://picsum.photos/seed/modista-fi1/100/120' },
  { name: 'Summer Dress', price: 65, image: 'https://picsum.photos/seed/modista-fi2/100/120' },
  { name: 'Sport Shoes', price: 110, image: 'https://picsum.photos/seed/modista-fi3/100/120' },
  { name: 'Designer Bag', price: 180, image: 'https://picsum.photos/seed/modista-fi4/100/120' },
] as const

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0])

  const filtered = allProducts.filter((p) => p.category === activeTab)

  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Featured products">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <h2 className="mb-4 font-heading text-lg font-bold uppercase tracking-wide text-text-heading">
            Featured Products
          </h2>
          <div className="space-y-4">
            {featuredItems.map((item) => (
              <div key={item.name} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-[80px] w-[60px] object-cover" />
                <div>
                  <p className="text-sm font-medium text-text-heading">{item.name}</p>
                  <p className="text-sm text-text-secondary">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main area */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="mb-6 flex gap-4 border-b border-border-light">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-brand-red text-brand-red'
                    : 'text-text-secondary hover:text-text-heading'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {filtered.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden border border-border-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-[220px] w-full object-cover"
                  />
                  {product.badge && (
                    <span
                      className={`absolute left-2 top-2 rounded-[3px] px-2 py-0.5 text-xs font-semibold text-white ${product.badgeColor}`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-sm font-medium text-text-heading">{product.name}</h3>
                <p className="text-sm text-text-secondary">
                  {product.oldPrice && (
                    <span className="mr-2 text-text-muted line-through">${product.oldPrice}</span>
                  )}
                  <span className="font-semibold text-text-primary">${product.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
