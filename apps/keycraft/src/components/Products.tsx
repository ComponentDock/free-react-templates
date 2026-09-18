import { Star } from 'lucide-react'

const products = [
  { id: 1, title: 'Master Lock Set', price: '$55.0' },
  { id: 2, title: 'Digital Deadbolt', price: '$55.0' },
  { id: 3, title: 'Smart Padlock', price: '$55.0' },
  { id: 4, title: 'Cylinder Lock Pro', price: '$55.0' },
  { id: 5, title: 'Vault Handle Kit', price: '$55.0' },
] as const

function StarRating() {
  return (
    <div className="mt-2 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary-400 text-primary-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Products() {
  return (
    <section id="shop" aria-label="Our products" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section heading */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-400">
              Our products
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase text-teal sm:text-4xl">
              Locksmith Store
            </h2>
          </div>
          <a
            href="#shop"
            className="rounded border-2 border-teal px-6 py-2 text-sm font-bold uppercase text-teal transition-colors hover:bg-teal hover:text-white"
          >
            View all
          </a>
        </div>

        {/* Product cards */}
        <div className="mt-12 flex flex-wrap gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full rounded border border-gray-100 shadow-sm transition-shadow hover:shadow-md sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <img
                src={`https://picsum.photos/seed/keycraft-product-${product.id}/400/300`}
                alt={product.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-sm font-bold text-primary-400">{product.price}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-teal">{product.title}</h3>
                <StarRating />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
