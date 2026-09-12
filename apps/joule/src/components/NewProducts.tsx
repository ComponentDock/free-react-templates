import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = ['Laptops', 'Smartphones', 'Cameras', 'Accessories']

const products = [
  {
    id: 1,
    category: 'Laptops',
    name: 'MacBook Pro',
    price: 1299,
    oldPrice: 1499,
    label: 'sale' as const,
    image: 'https://picsum.photos/seed/joule-laptop1/300/300',
  },
  {
    id: 2,
    category: 'Smartphones',
    name: 'Galaxy S24',
    price: 899,
    oldPrice: null,
    label: 'new' as const,
    image: 'https://picsum.photos/seed/joule-phone1/300/300',
  },
  {
    id: 3,
    category: 'Cameras',
    name: 'Canon EOS R5',
    price: 2499,
    oldPrice: 2799,
    label: 'sale' as const,
    image: 'https://picsum.photos/seed/joule-cam1/300/300',
  },
  {
    id: 4,
    category: 'Accessories',
    name: 'AirPods Max',
    price: 499,
    oldPrice: null,
    label: 'new' as const,
    image: 'https://picsum.photos/seed/joule-acc1/300/300',
  },
]

interface ProductCardProps {
  product: (typeof products)[number]
}

function ProductCard({ product }: ProductCardProps) {
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

export function NewProducts() {
  const [activeTab, setActiveTab] = useState('Laptops')

  const filtered = products.filter((p) => p.category === activeTab)

  return (
    <section id="new-products" className="bg-body-bg py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-6 text-xl font-bold uppercase text-body-text">New Products</h2>
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
