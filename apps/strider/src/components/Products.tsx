import { ShoppingBag, Heart, RefreshCw, Eye } from 'lucide-react'

const products = [
  {
    name: 'Classic Runner Sneakers',
    salePrice: '$150.00',
    originalPrice: '$210.00',
    image: 'https://picsum.photos/seed/strider-p1/300/300',
  },
  {
    name: 'Sport Elite Training Shoes',
    salePrice: '$120.00',
    originalPrice: '$180.00',
    image: 'https://picsum.photos/seed/strider-p2/300/300',
  },
  {
    name: 'Urban Street High Tops',
    salePrice: '$175.00',
    originalPrice: '$240.00',
    image: 'https://picsum.photos/seed/strider-p3/300/300',
  },
  {
    name: 'Performance Boost Runners',
    salePrice: '$195.00',
    originalPrice: '$260.00',
    image: 'https://picsum.photos/seed/strider-p4/300/300',
  },
]

const actions = [
  { icon: ShoppingBag, label: 'Add to bag' },
  { icon: Heart, label: 'Wishlist' },
  { icon: RefreshCw, label: 'Compare' },
  { icon: Eye, label: 'Quick view' },
]

export function Products() {
  return (
    <section id="shop" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Latest Products
          </h2>
          <p className="mt-2 text-body">
            Explore our curated collection of premium fashion essentials.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative mb-3 overflow-hidden rounded-xl bg-light-bg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3
                className="mb-1 text-sm font-medium text-heading"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {product.name}
              </h3>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-sm font-semibold text-brand">{product.salePrice}</span>
                <span className="text-xs text-body line-through">{product.originalPrice}</span>
              </div>
              <div className="flex gap-2">
                {actions.map((action) => (
                  <button
                    key={action.label}
                    aria-label={action.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-body transition-colors hover:border-brand hover:text-brand"
                  >
                    <action.icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
