import { Star, ShoppingCart } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 89,
    rating: 4,
    image: 'https://picsum.photos/seed/techvault-bs1/300/300',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    price: 45,
    rating: 5,
    image: 'https://picsum.photos/seed/techvault-bs2/300/300',
    color: 'White',
  },
  {
    id: 3,
    name: 'USB-C Hub',
    price: 35,
    rating: 4,
    image: 'https://picsum.photos/seed/techvault-bs3/300/300',
    color: 'Silver',
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 120,
    rating: 5,
    image: 'https://picsum.photos/seed/techvault-bs4/300/300',
    color: 'RGB',
  },
  {
    id: 5,
    name: 'Webcam HD',
    price: 55,
    rating: 3,
    image: 'https://picsum.photos/seed/techvault-bs5/300/300',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Portable Speaker',
    price: 65,
    rating: 4,
    image: 'https://picsum.photos/seed/techvault-bs6/300/300',
    color: 'Blue',
  },
  {
    id: 7,
    name: 'Smart Watch',
    price: 199,
    rating: 5,
    image: 'https://picsum.photos/seed/techvault-bs7/300/300',
    color: 'Silver',
  },
  {
    id: 8,
    name: 'Power Bank',
    price: 29,
    rating: 4,
    image: 'https://picsum.photos/seed/techvault-bs8/300/300',
    color: 'Black',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function BestSellers() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 font-display text-2xl font-bold text-ink">Best Sellers</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group rounded-lg border border-gray-100 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div className="relative mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full object-contain"
                />
                <button
                  className="absolute right-2 top-2 rounded-full bg-white p-2 opacity-0 shadow transition-opacity group-hover:opacity-100"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <ShoppingCart className="h-4 w-4 text-primary-400" />
                </button>
              </div>
              <Stars count={product.rating} />
              <h3 className="mt-2 font-display text-sm font-bold text-ink">{product.name}</h3>
              <p className="text-xs text-smoke">{product.color}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-lg font-bold text-primary-400">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
