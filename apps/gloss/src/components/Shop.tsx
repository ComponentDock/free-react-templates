import { Eye, Heart, ShoppingBag } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const products = [
  { name: 'Leather shopper bag', price: '$49.00', seed: 'gloss-shop-1' },
  { name: 'Leather shopper bag', price: '$49.00', seed: 'gloss-shop-2' },
  { name: 'Leather shopper bag', price: '$49.00', seed: 'gloss-shop-3' },
  { name: 'Leather shopper bag', price: '$49.00', seed: 'gloss-shop-4' },
] as const

export function Shop() {
  return (
    <section id="shop" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Shop the collection
          </p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl dark:text-white">
            Beauty products
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.seed}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${product.seed}/480/560`}
                  alt={product.name}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-maroon/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="rounded-full bg-white p-2 text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Keep an eye on ${product.name}`}
                    className="rounded-full bg-white p-2 text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Love ${product.name}`}
                    className="rounded-full bg-white p-2 text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    <Heart className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="p-5 text-center">
                <p className="text-xs uppercase tracking-widest text-muted">Palettes</p>
                <h3 className="mt-2 font-display text-base text-ink dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand">{product.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#shop"
            variant="outline"
            className="rounded-full px-8 uppercase tracking-widest"
          >
            View all products
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
