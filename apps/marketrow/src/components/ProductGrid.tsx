import { PRODUCTS } from '../content'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  added: string[]
  onToggle: (product: string) => void
}

/**
 * `repeat(auto-fill, minmax(236px, 1fr))` with a 20px gap is the whole
 * responsive system: 1 column to 523px, 2 to 779, 3 to 1,035, 4 above. There
 * is no width media query in the design, so there is none here either.
 */
export function ProductGrid({ added, onToggle }: ProductGridProps) {
  return (
    <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(236px,1fr))] gap-5 p-0">
      {PRODUCTS.map((product) => (
        <li key={product.id} className="flex">
          <ProductCard
            product={product}
            added={added.includes(product.name)}
            onToggle={onToggle}
          />
        </li>
      ))}
    </ul>
  )
}
