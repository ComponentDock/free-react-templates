import { Star, Heart, ShoppingCart, Eye } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Classic Watch',
    rating: 5,
    image: 'stall-prod-1',
    desc: 'Elegant timepiece for everyday wear.',
  },
  {
    id: 2,
    name: 'Leather Bag',
    rating: 4,
    image: 'stall-prod-2',
    desc: 'Premium handcrafted leather bag.',
  },
  {
    id: 3,
    name: 'Running Shoes',
    rating: 5,
    image: 'stall-prod-3',
    desc: 'Lightweight shoes for peak performance.',
  },
  {
    id: 4,
    name: 'Sunglasses',
    rating: 4,
    image: 'stall-prod-4',
    desc: 'UV protection with modern style.',
  },
  {
    id: 5,
    name: 'Backpack',
    rating: 5,
    image: 'stall-prod-5',
    desc: 'Spacious and durable for travel.',
  },
  {
    id: 6,
    name: 'Headphones',
    rating: 4,
    image: 'stall-prod-6',
    desc: 'Crystal clear sound quality.',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function Products() {
  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Our Products
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="group border border-gray-200 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.image}/400/300`}
                  alt={p.name}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  width={400}
                  height={300}
                />
                <button
                  aria-label={`Add ${p.name} to wishlist`}
                  className="absolute right-3 top-3 rounded-full bg-white p-2 text-gray-400 shadow transition-colors hover:text-brand"
                >
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-heading">{p.name}</h3>
                <StarRating count={p.rating} />
                <p className="mt-2 text-sm text-body">{p.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex items-center gap-1 rounded-none bg-gray-900 px-4 py-2 text-xs font-bold uppercase text-white transition-colors hover:bg-brand">
                    <ShoppingCart className="h-3 w-3" />
                    Cart
                  </button>
                  <button className="flex items-center gap-1 rounded-none border border-gray-300 px-4 py-2 text-xs font-bold uppercase text-gray-700 transition-colors hover:border-brand hover:text-brand">
                    <Eye className="h-3 w-3" />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
