import type { Product } from '../content'
import { AddButton } from './AddButton'
import { PriceRow } from './PriceRow'
import { ProductFlag } from './ProductFlag'
import { Rating } from './Rating'

interface ProductCardProps {
  product: Product
  added: boolean
  onToggle: (product: string) => void
}

/**
 * A white, radius-18 plate with `overflow: hidden`, so the square photo is
 * clipped by the plate's own corners and the button keeps its 18px margins.
 * Nothing lifts on hover here — only the photo scales and the shadow deepens.
 */
export function ProductCard({ product, added, onToggle }: ProductCardProps) {
  return (
    <article
      data-product={product.name}
      className="product-card flex w-full flex-col overflow-hidden rounded-[18px] bg-surface text-[15px] leading-[1.45] text-ink shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow duration-300 ease-out hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-square overflow-hidden bg-media">
        <img
          src={product.photo}
          alt={product.alt}
          width={600}
          height={600}
          loading="lazy"
          className="card-media-img"
        />
        <ProductFlag kind={product.flag.kind} label={product.flag.label} />
      </div>

      <div className="flex-1 px-[18px] pb-2 pt-4">
        <p className="m-0 text-[12.5px] font-medium uppercase leading-[1.45] tracking-[0.06em] text-muted">
          {product.category}
        </p>
        <h2 className="mb-2 mt-1 text-[17px] font-bold leading-[1.3] tracking-[-0.01em]">
          {product.name}
        </h2>
        <Rating product={product} />
        <PriceRow price={product.price} was={product.was} />
      </div>

      <AddButton added={added} product={product.name} onToggle={onToggle} />
    </article>
  )
}
