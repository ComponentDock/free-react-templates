import { ProductCard } from './ProductCard'
import { SHOP_LINK, type Product } from '../data'

/* product_list section — h2 + "shop" link + a grid of product cards.
   Reused for "awesome shop" (12 items) and "Best Sellers" (4 items). */
export function ProductGrid({ title, products }: { title: string; products: Product[] }) {
  return (
    <section className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[26px] font-bold text-ink dark:text-white">{title}</h2>
          <a
            href="#shop"
            className="text-[14px] font-medium tracking-[0.1em] text-body uppercase transition-colors hover:text-brand dark:text-white/70"
          >
            {SHOP_LINK}
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.seed} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
