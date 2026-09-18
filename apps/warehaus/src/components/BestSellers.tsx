import { ShoppingCart } from 'lucide-react'

const PRODUCTS = [
  {
    id: 1,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-p1/400/500',
  },
  {
    id: 2,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-p2/400/500',
  },
  {
    id: 3,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-p3/400/500',
  },
  {
    id: 4,
    name: 'Floral Jackquard Pullover',
    price: '$45.00',
    image: 'https://picsum.photos/seed/warehaus-p4/400/500',
  },
]

export function BestSellers() {
  return (
    <section className="py-16" id="shop">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold">Best Sellers</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-text-muted">{product.price}</p>
              </div>
              <button
                type="button"
                aria-label={`Add ${product.name} to cart`}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
