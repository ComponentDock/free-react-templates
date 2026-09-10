import { Heart, Eye, Repeat } from 'lucide-react'

const products = [
  {
    name: 'High Flow Fuel',
    price: '$800.00',
    image: 'https://picsum.photos/seed/veloce-p1/400/400',
  },
  {
    name: 'Revolution Wheels',
    price: '$800.00',
    image: 'https://picsum.photos/seed/veloce-p2/400/400',
  },
  {
    name: 'Tone Interior Kit',
    price: '$800.00',
    image: 'https://picsum.photos/seed/veloce-p3/400/400',
  },
  {
    name: 'Matte Gunmetal',
    price: '$800.00',
    image: 'https://picsum.photos/seed/veloce-p4/400/400',
  },
] as const

export function Products() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Our Products</h2>
          <p className="mt-3 text-smoke">
            Quality automotive parts and accessories for every need.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.name} className="group">
              <div className="relative overflow-hidden rounded-sm bg-mist">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`Wishlist ${product.name}`}
                    className="rounded-full bg-white p-2 text-body transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`View ${product.name}`}
                    className="rounded-full bg-white p-2 text-body transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Compare ${product.name}`}
                    className="rounded-full bg-white p-2 text-body transition-colors hover:bg-primary-400 hover:text-white"
                  >
                    <Repeat className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <span className="text-sm font-bold text-primary-400">{product.price}</span>
                <button
                  type="button"
                  className="text-xs font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  +Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
