import { Star } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Summer Dress',
    price: 30,
    rating: 5,
    image: 'https://picsum.photos/seed/silkhouse-arrival-1/400/500',
  },
  {
    id: 2,
    name: 'Casual Jacket',
    price: 45,
    rating: 4,
    image: 'https://picsum.photos/seed/silkhouse-arrival-2/400/500',
  },
  {
    id: 3,
    name: 'Denim Jeans',
    price: 35,
    rating: 5,
    image: 'https://picsum.photos/seed/silkhouse-arrival-3/400/500',
  },
  {
    id: 4,
    name: 'Silk Blouse',
    price: 50,
    rating: 4,
    image: 'https://picsum.photos/seed/silkhouse-arrival-4/400/500',
  },
  {
    id: 5,
    name: 'Leather Boots',
    price: 65,
    rating: 5,
    image: 'https://picsum.photos/seed/silkhouse-arrival-5/400/500',
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 40,
    rating: 4,
    image: 'https://picsum.photos/seed/silkhouse-arrival-6/400/500',
  },
  {
    id: 7,
    name: 'Cotton T-Shirt',
    price: 20,
    rating: 5,
    image: 'https://picsum.photos/seed/silkhouse-arrival-7/400/500',
  },
  {
    id: 8,
    name: 'Linen Pants',
    price: 38,
    rating: 4,
    image: 'https://picsum.photos/seed/silkhouse-arrival-8/400/500',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export function NewArrivals() {
  return (
    <section aria-label="New arrivals" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2
          className="mb-10 text-center text-3xl font-semibold text-text-dark"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          New Arrival
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="mb-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-[300px]"
                  loading="lazy"
                />
              </div>
              <h3 className="mb-1 text-sm font-medium text-text-dark">{product.name}</h3>
              <StarRating rating={product.rating} />
              <p className="mt-1 text-sm font-semibold text-brand">${product.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
