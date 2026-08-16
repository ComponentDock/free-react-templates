import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { filters, products, type Product } from '../data'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  onAddToCart: (product: Product) => void
  onQuickView: (product: Product) => void
}

const PAGE_SIZE = 8

/** "New arrivals" product section: filter button row (functional category
 *  filtering), responsive grid of product cards, Load More pill. */
export function ProductGrid({ onAddToCart, onQuickView }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('All Products')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visibleProducts =
    activeFilter === 'All Products'
      ? products
      : products.filter((product) => product.category === activeFilter.toLowerCase())

  const handleFilter = (filter: (typeof filters)[number]) => {
    setActiveFilter(filter)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section id="products" className="bg-white px-6 pb-[140px] pt-[92px] lg:px-16">
      <h2 className="text-center font-display text-[50px] font-bold text-ink-soft">New arrivals</h2>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-6">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => handleFilter(filter)}
            className={cn(
              'relative pb-1 text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand',
              activeFilter === filter
                ? 'text-ink-soft after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-ink-soft'
                : 'text-muted hover:text-ink-soft',
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {visibleCount < visibleProducts.length && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="btn-pill-light"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  )
}
