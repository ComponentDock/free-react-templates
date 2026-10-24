import { popularProducts } from '../data'
import { ProductCard } from './ProductCard'
import { SectionTitle } from './SectionTitle'

/** Three-column grid of the six most popular pieces. */
export function PopularProducts() {
  return (
    <section id="popular" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <SectionTitle>Popular Products</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
