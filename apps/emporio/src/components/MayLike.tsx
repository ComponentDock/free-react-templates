import { mayLikeProducts } from '../data'
import { ProductCard } from './ProductCard'

/* Reference: section.latest-items #2 — "You May Like" heading and a products
   carousel of four cards (same card kind as the Trending section). */
export function MayLike() {
  return (
    <section aria-label="You may like" className="bg-white pb-[100px] pt-[95px] text-center">
      <div className="mx-auto max-w-[1320px] px-4">
        <h2 className="text-[34px]">You May Like</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {mayLikeProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
