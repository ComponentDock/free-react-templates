import { useState } from 'react'
import { Eye, Heart } from 'lucide-react'
import {
  addToCartLabel,
  productFilters,
  products,
  quickViewLabel,
  saveLabel,
  seeMoreLabel,
  type ProductFilterId,
} from '../data'

export function ProductGrid() {
  const [filter, setFilter] = useState<ProductFilterId>('all')

  const visible =
    filter === 'all' ? products : products.filter((product) => product.categories.includes(filter))

  return (
    <section id="products-section" className="bg-surface px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <ul
          className="flex flex-wrap items-center justify-center gap-6"
          role="tablist"
          aria-label="Product filters"
        >
          {productFilters.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`text-sm font-semibold uppercase transition-colors ${
                  filter === tab.id ? 'text-brand' : 'text-ink hover:text-brand'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-12 grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((product, index) => (
            <li key={`${product.name}-${index}`} className="group">
              <figure className="relative overflow-hidden bg-paper">
                <img
                  src={product.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-ink px-2 py-1 text-xs font-bold uppercase text-white">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 flex items-stretch justify-between bg-ink text-white">
                  <a
                    href="#contact-section"
                    className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-medium uppercase transition-colors hover:bg-brand"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    {quickViewLabel}
                  </a>
                  <a
                    href="#contact-section"
                    aria-label={`${saveLabel} ${product.name}`}
                    className="flex flex-1 items-center justify-center gap-2 py-3 text-xs font-medium uppercase transition-colors hover:bg-brand"
                  >
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {saveLabel}
                  </a>
                </div>
              </figure>
              <div className="pt-4 text-center">
                <h3 className="text-base font-semibold text-ink">{product.name}</h3>
                {product.price ? (
                  <p className="mt-1 text-sm text-ink">{product.price}</p>
                ) : (
                  <p className="mt-1 text-sm text-muted">
                    <s>{product.rrp}</s>
                  </p>
                )}
                <a
                  href="#contact-section"
                  className="mt-2 inline-block border-2 border-ink px-4 py-2 text-xs font-medium uppercase text-ink transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {addToCartLabel}
                </a>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
          <a
            href="#blog-section"
            className="inline-flex min-w-[138px] items-center justify-center bg-ink px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand"
          >
            {seeMoreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
