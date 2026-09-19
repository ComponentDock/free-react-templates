import { ShoppingCart, Heart, Eye } from 'lucide-react'

const products = [
  {
    name: 'Bacardi 151',
    category: 'Brandy',
    price: '$49.00',
    original: '$69.00',
    badge: 'Sale',
    seed: 'bacardi',
  },
  {
    name: 'Jim Beam Kentucky',
    category: 'Gin',
    price: '$69.00',
    original: '',
    badge: 'Best Seller',
    seed: 'jimbeam',
  },
  {
    name: 'Citadelle',
    category: 'Rum',
    price: '$69.00',
    original: '',
    badge: 'New Arrival',
    seed: 'citadelle',
  },
  {
    name: 'The Glenlivet',
    category: 'Rum',
    price: '$69.00',
    original: '',
    badge: '',
    seed: 'glenlivet',
  },
  {
    name: 'Black Label',
    category: 'Whiskey',
    price: '$69.00',
    original: '',
    badge: '',
    seed: 'blacklabel',
  },
  {
    name: 'Macallan',
    category: 'Tequila',
    price: '$69.00',
    original: '',
    badge: '',
    seed: 'macallan',
  },
  {
    name: 'Old Monk',
    category: 'Vodka',
    price: '$69.00',
    original: '',
    badge: '',
    seed: 'oldmonk',
  },
  {
    name: 'Jameson Irish',
    category: 'Whiskey',
    price: '$69.00',
    original: '',
    badge: '',
    seed: 'jameson',
  },
]

function Badge({ type }: { type: string }) {
  if (!type) return null
  const colors: Record<string, string> = {
    Sale: 'bg-red-500 text-white',
    'Best Seller': 'bg-brand text-white',
    'New Arrival': 'bg-green-600 text-white',
  }
  return (
    <span
      className={`absolute left-3 top-3 rounded px-2 py-0.5 text-xs font-medium ${colors[type]}`}
    >
      {type}
    </span>
  )
}

export function ProductGrid() {
  return (
    <section id="products" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-brand">
            Our Delightful Offerings
          </span>
          <h2
            className="text-3xl font-bold text-heading dark:text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Tastefully Yours
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-lg bg-bg-light p-4 dark:bg-gray-800"
            >
              <Badge type={p.badge} />
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/400`}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition-all group-hover:bg-black/30 group-hover:opacity-100">
                  <button
                    className="rounded-full bg-white p-2 text-heading shadow transition-colors hover:text-brand"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    <ShoppingCart size={16} />
                  </button>
                  <button
                    className="rounded-full bg-white p-2 text-heading shadow transition-colors hover:text-brand"
                    aria-label={`Add ${p.name} to wishlist`}
                  >
                    <Heart size={16} />
                  </button>
                  <button
                    className="rounded-full bg-white p-2 text-heading shadow transition-colors hover:text-brand"
                    aria-label={`Quick view ${p.name}`}
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-ink dark:text-gray-400">{p.category}</span>
                <h3 className="font-heading text-base font-semibold text-heading dark:text-white">
                  {p.name}
                </h3>
                <p className="text-sm">
                  {p.original && (
                    <span className="mr-2 text-gray-400 line-through">{p.original}</span>
                  )}
                  <span className="font-medium text-brand">{p.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
