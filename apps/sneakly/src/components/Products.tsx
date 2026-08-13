import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { products } from '../data'

/** Light #f8f9fa "New Shoes Arrival" section with eight product cards in a
 *  4/2/1 grid. Each card: photo with a gold circle that fades in behind it
 *  on hover plus an "Add to cart / Buy now" action bar that slides up
 *  (always visible below 992px, like the reference), vertical gold status
 *  ribbon on sale items, category label, five outline stars, bold uppercase
 *  name and price (with strikethrough original on sale). */
export function Products() {
  return (
    <section data-testid="products" id="products" className="bg-light py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-[40px] font-semibold text-ink">New Shoes Arrival</h2>
          <p className="text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.image}
              className="group flex flex-col bg-white shadow-[0_0_30px_-10px_rgba(0,0,0,0.1)]"
            >
              <div className="relative overflow-hidden bg-white">
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="relative z-[1] aspect-[3/4] w-full object-cover"
                />
                {product.ribbon && (
                  <span className="absolute left-0 top-4 z-10 bg-brand px-1 py-2 text-xs font-normal uppercase text-ink [text-orientation:sideways] [writing-mode:vertical-lr] -rotate-180">
                    {product.ribbon}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full transition-transform duration-300 group-hover:translate-y-0 lg:opacity-0 lg:group-hover:opacity-100">
                  <button
                    type="button"
                    className="w-full bg-ink py-2.5 text-[13px] font-light uppercase tracking-wide text-white transition-colors hover:bg-brand"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="w-full bg-white py-2.5 text-[13px] font-light uppercase tracking-wide text-ink transition-colors hover:bg-brand hover:text-white"
                  >
                    Buy now
                  </button>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col px-3 pb-4 pt-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[1px] text-black/30">
                    {product.category}
                  </span>
                  <span
                    className="flex gap-0.5"
                    aria-label={`${product.name} rating, 5 out of 5 stars`}
                  >
                    {Array.from({ length: 5 }, (_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <h3 className="text-sm font-bold uppercase text-ink">{product.name}</h3>
                <p className={cn('mt-1 text-sm', product.oldPrice && 'flex gap-2')}>
                  {product.oldPrice && (
                    <span className="text-muted line-through">{product.oldPrice}</span>
                  )}
                  <span className="text-ink">{product.price}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
