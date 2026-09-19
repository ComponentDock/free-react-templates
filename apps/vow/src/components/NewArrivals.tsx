import { ShoppingBag, Plus, Star } from 'lucide-react'

const products = [
  { id: 1, name: "Woman's Long Dress", price: '$45.00', rating: 4, seed: 'vow-prod-1' },
  { id: 2, name: '2 Piece Swimsuit', price: '$35.00', rating: 4, seed: 'vow-prod-2' },
  { id: 3, name: 'Summer Dress', price: '$55.00', rating: 5, seed: 'vow-prod-3' },
  { id: 4, name: 'Floral Blouse', price: '$29.00', rating: 4, seed: 'vow-prod-4' },
  { id: 5, name: 'Linen Pants', price: '$42.00', rating: 3, seed: 'vow-prod-5' },
  { id: 6, name: 'Knit Cardigan', price: '$65.00', rating: 5, seed: 'vow-prod-6' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-2 flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-brand text-brand' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export function NewArrivals() {
  return (
    <section className="bg-light-bg py-16" aria-labelledby="arrivals-heading">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-1 text-sm font-semibold uppercase tracking-[3px] text-body-text">
          only the best
        </p>
        <h2
          id="arrivals-heading"
          className="mb-10 font-sans text-3xl font-bold capitalize text-heading"
        >
          new arrivals
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="product-card group bg-white p-4">
              <div className="relative mb-3 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/400`}
                  alt={p.name}
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
                <div className="product-actions absolute right-3 top-3 flex flex-col gap-2">
                  <button
                    aria-label={`Add ${p.name} to cart`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-brand hover:text-white"
                  >
                    <ShoppingBag size={16} />
                  </button>
                  <button
                    aria-label={`Add ${p.name} to wishlist`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-brand hover:text-white"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
              <StarRating rating={p.rating} />
              <h3 className="text-sm font-semibold text-heading">
                <a href="#" className="hover:text-brand">
                  {p.name}
                </a>
              </h3>
              <p className="mt-1 text-sm font-bold text-brand">{p.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
