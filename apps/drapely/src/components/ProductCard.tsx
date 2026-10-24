import { formatPrice, photo, type Product } from '../data'
import { StarRating } from './StarRating'

interface ProductCardProps {
  product: Product
}

/** Product tile: photo on a light-gray block, name, bold black price (with a
 *  struck-through list price when discounted) and an optional star row. */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <a href="#popular" className="block h-[320px] bg-surface p-6 md:h-[400px]">
        <img
          src={photo(product.seed, 600, 600)}
          alt={`${product.name} product photo`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </a>
      <h3 className="mt-4 text-lg leading-snug font-normal text-ink">
        <a href="#popular" className="transition-colors hover:text-brand">
          {product.name}
        </a>
      </h3>
      <p className="mt-1 font-bold text-black">
        {product.wasPrice !== undefined && (
          <del className="mr-2 font-normal text-price-old">{formatPrice(product.wasPrice)}</del>
        )}
        {formatPrice(product.price)}
      </p>
      {product.rating !== undefined && <StarRating value={product.rating} />}
    </article>
  )
}
