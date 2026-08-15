import { ArrowRight, ShoppingBag, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { products } from '../data'

export function Products() {
  return (
    <section id="wines" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-normal text-ink">Our Products</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/60">
            Hand-selected vintages from family estates, cellared and shipped with care.
          </p>
          <a
            href="#wines"
            className="mt-6 inline-flex items-center gap-2 font-serif text-sm font-bold uppercase tracking-widest text-brand transition-opacity hover:opacity-70"
          >
            View All Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} data-product className="group text-center">
              <div className="relative overflow-hidden bg-panel">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  data-overlay
                  className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/95 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <h3 className="font-serif text-lg text-ink">{product.name}</h3>
                  <p className="text-sm">
                    <del className="mr-2 text-muted">{product.originalPrice}</del>
                    <span className="font-serif text-xl font-bold text-brand">{product.price}</span>
                  </p>
                  <p
                    aria-label={`Rated ${product.rating} out of ${product.ratingMax} stars`}
                    className="flex items-center gap-1"
                  >
                    {Array.from({ length: product.ratingMax }, (_, i) => (
                      <Star
                        key={i}
                        aria-hidden="true"
                        className={cn(
                          'h-4 w-4',
                          i < product.rating ? 'fill-gold text-gold' : 'text-muted',
                        )}
                      />
                    ))}
                  </p>
                  <button
                    type="button"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-opacity hover:opacity-80"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" /> Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="mt-5 font-serif text-xl text-ink">{product.name}</h3>
              <p className="mt-1 font-serif text-lg font-bold text-brand">{product.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
