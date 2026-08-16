import { Heart, ShoppingCart, ZoomIn } from 'lucide-react'
import type { Product } from '../data'

/* Reference: div.properties-card — white card with a photo, a hover-revealed
   three-icon overlay (cart / heart / zoom) over the image, the product name
   in charcoal and a price row: red sale price + strikethrough original. */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-white text-left">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 pb-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal transition-colors hover:bg-brand hover:text-white"
          >
            <ShoppingCart size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal transition-colors hover:bg-brand hover:text-white"
          >
            <Heart size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`View ${product.name}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-charcoal transition-colors hover:bg-brand hover:text-white"
          >
            <ZoomIn size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
      <h3 className="mt-4 text-base font-normal text-charcoal">{product.name}</h3>
      <p className="mt-1 font-heading text-base font-medium">
        <span className="text-brand">{product.price}</span>{' '}
        <span className="text-strike line-through">{product.original}</span>
      </p>
    </article>
  )
}
