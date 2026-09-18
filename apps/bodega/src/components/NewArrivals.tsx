import { ShoppingCart } from 'lucide-react'

interface Product {
  id: number
  name: string
  price: number
  image: string
  badge?: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Floral Print Dress',
    price: 24.5,
    image: 'https://picsum.photos/seed/bodega-p1/400/500',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 49.99,
    image: 'https://picsum.photos/seed/bodega-p2/400/500',
  },
  {
    id: 3,
    name: 'Leather Boots',
    price: 89.0,
    image: 'https://picsum.photos/seed/bodega-p3/400/500',
    badge: 'Sale',
  },
  {
    id: 4,
    name: 'Cotton T-Shirt',
    price: 15.99,
    image: 'https://picsum.photos/seed/bodega-p4/400/500',
  },
  {
    id: 5,
    name: 'Slim Fit Jeans',
    price: 39.99,
    image: 'https://picsum.photos/seed/bodega-p5/400/500',
    badge: 'New',
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 55.0,
    image: 'https://picsum.photos/seed/bodega-p6/400/500',
  },
  {
    id: 7,
    name: 'Canvas Sneakers',
    price: 34.99,
    image: 'https://picsum.photos/seed/bodega-p7/400/500',
    badge: 'Sale',
  },
  {
    id: 8,
    name: 'Chino Pants',
    price: 29.5,
    image: 'https://picsum.photos/seed/bodega-p8/400/500',
  },
]

interface NewArrivalsProps {
  onAddToCart?: (id: number) => void
}

export function NewArrivals({ onAddToCart }: NewArrivalsProps) {
  return (
    <section id="shop" className="py-16" aria-label="New arrivals">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-heading">
            <span className="border-b-4 border-brand pb-1">New Arrival</span>
          </h2>
          <p className="mt-3 text-body max-w-xl mx-auto">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold uppercase text-white rounded-sm ${
                      product.badge === 'Sale' ? 'bg-danger' : 'bg-green'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => onAddToCart?.(product.id)}
                  className="absolute bottom-0 left-0 right-0 bg-brand/90 text-heading text-center py-2 text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart size={16} />
                  Add to cart
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm text-heading font-medium truncate">{product.name}</h3>
                <p className="text-brand font-bold mt-1">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
