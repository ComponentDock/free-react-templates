import { NEW_PRODUCTS } from '../data'
import { ProductCard } from './ProductCard'

/* new product — "NEW PRODUCT" section title + an 8-card grid (4 columns on
   wide screens), mirroring the original's product row. */
export function NewProduct() {
  return (
    <section id="new-products" className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold tracking-wide text-ink uppercase dark:text-white">
          New Product
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NEW_PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
