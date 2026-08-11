import { Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ADD_TO_CART, type Product } from '../data'

/* product card — image top, name (h4), price (h3), "+ add to cart" with a
   heart icon; radius 5px, hover lift + shadow. Reused in the "awesome
   shop" grid (12 items) and "Best Sellers" (4 items). */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-[5px] bg-white p-4 shadow-sm transition-shadow hover:shadow-lg dark:bg-white/5">
      <a href="#shop" aria-label={product.name} className="block overflow-hidden rounded-[5px]">
        <img
          src={`https://picsum.photos/seed/${product.seed}/400/400`}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>
      <h3 className="mt-4 text-[15px] font-medium text-ink dark:text-white">{product.name}</h3>
      <p className="mt-1 text-[17px] font-bold text-brand">{product.price}</p>
      <button
        type="button"
        className={cn(
          'mt-3 inline-flex cursor-pointer items-center gap-2 rounded-[5px] border border-brand/30 px-4 py-2',
          'text-[13px] font-medium text-ink transition-colors hover:bg-brand hover:text-white',
          'dark:text-white dark:hover:text-white',
        )}
      >
        <Heart aria-hidden="true" className="h-4 w-4" />
        {ADD_TO_CART}
      </button>
    </article>
  )
}
