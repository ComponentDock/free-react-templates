import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories']

const topProducts = [
  {
    id: 10,
    category: 'Laptops',
    name: 'Dell XPS 15',
    price: 1199,
    oldPrice: 1399,
    label: 'sale' as const,
    image: 'https://picsum.photos/seed/joule-top1/300/300',
  },
  {
    id: 11,
    category: 'Smartphones',
    name: 'iPhone 16 Pro',
    price: 1099,
    oldPrice: null,
    label: 'new' as const,
    image: 'https://picsum.photos/seed/joule-top2/300/300',
  },
  {
    id: 12,
    category: 'Cameras',
    name: 'Sony A7 IV',
    price: 1899,
    oldPrice: 2099,
    label: 'sale' as const,
    image: 'https://picsum.photos/seed/joule-top3/300/300',
  },
  {
    id: 13,
    category: 'Accessories',
    name: 'Logitech MX Keys',
    price: 119,
    oldPrice: null,
    label: null,
    image: 'https://picsum.photos/seed/joule-top4/300/300',
  },
]

interface TopProductCardProps {
  product: (typeof topProducts)[number]
}

function TopProductCard({ product }: TopProductCardProps) {
  return (
    <div className="group rounded border border-gray-200 bg-white p-4 text-center transition-shadow hover:shadow-md">
      <div className="relative mx-auto mb-3 h-[200px] w-full overflow-hidden rounded">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          loading="lazy"
        />
        {product.label && (
          <span
            className={cn(
              'absolute left-2 top-2 rounded border-2 px-2 py-0.5 text-xs font-semibold uppercase',
              product.label === 'sale'
                ? 'border-brand bg-white text-brand'
                : 'border-brand bg-brand text-white',
            )}
          >
            {product.label}
          </span>
        )}
      </div>
      <p className="mb-1 text-xs font-medium uppercase text-muted">{product.category}</p>
      <h3 className="mb-1 text-sm font-bold uppercase text-body-text">{product.name}</h3>
      <div className="mb-3 flex items-center justify-center gap-2">
        <span className="text-lg font-bold text-brand">${product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-muted line-through">${product.oldPrice}</span>
        )}
      </div>
      <button
        type="button"
        className="mx-auto flex items-center gap-1 rounded-[40px] border border-brand px-4 py-2 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
      >
        <ShoppingCart className="h-3 w-3" />
        Add to Cart
      </button>
    </div>
  )
}

export function TopSelling() {
  const [activeTab, setActiveTab] = useState('Laptops')

  const filtered = topProducts.filter((p) => p.category === activeTab)

  return (
    <section className="bg-body-bg py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-xl font-bold uppercase text-body-text">Top Selling</h2>
        {/* Category tabs */}
        <div className="mb-6 flex gap-0 border-b-2 border-light-grey">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={cn(
                'px-4 py-2 text-sm font-semibold uppercase transition-colors',
                activeTab === cat
                  ? 'border-b-2 border-brand text-brand'
                  : 'text-muted hover:text-body-text',
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Product grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {filtered.map((product) => (
            <TopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
