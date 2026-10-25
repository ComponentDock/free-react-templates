import type { Product } from '../content'
import { StarBar } from './StarBar'

interface RatingProps {
  product: Product
}

/**
 * The bar carries no text, so the row also states the rating once in words for
 * screen readers and appends the review count in muted regular weight.
 */
export function Rating({ product }: RatingProps) {
  return (
    <p className="m-0 mb-3 flex items-center gap-2 text-[13.5px] font-bold leading-[1.45]">
      <StarBar score={product.score} />
      <span>
        {product.score}{' '}
        <span className="font-normal text-muted">({product.reviews} reviews)</span>
      </span>
      <span className="sr-only">Rated {product.score} out of 5</span>
    </p>
  )
}
