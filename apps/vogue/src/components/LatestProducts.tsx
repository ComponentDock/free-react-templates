import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { products, productTabs } from '../data'
import type { ProductStatus, ProductTab } from '../data'

const statusStyles: Record<ProductStatus, string> = {
  new: 'bg-brand text-white',
  sale: 'bg-sale text-white',
  popular: 'bg-lightgrey text-brand',
}

export function LatestProducts() {
  const [active, setActive] = useState<ProductTab>('All')
  const visible =
    active === 'All' ? products : products.filter((p) => p.category === active.toLowerCase())

  return (
    <section aria-label="Latest products" className="py-[55px] pb-[65px]">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="font-display text-5xl font-bold text-brand md:text-[60px]">
            Latest Products
          </h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
            {productTabs.map((tab) => (
              <li key={tab}>
                <button
                  type="button"
                  onClick={() => setActive(tab)}
                  aria-pressed={active === tab}
                  className={cn(
                    'text-sm font-medium transition-colors',
                    active === tab ? 'text-brand' : 'text-secondary-3 hover:text-brand',
                  )}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <article key={`${p.name}-${p.status}-${p.image}`} className="text-center">
              <figure className="relative mb-10 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <span
                  className={cn(
                    'absolute left-3 top-3 rounded-full px-4 py-1 text-xs font-medium',
                    statusStyles[p.status],
                  )}
                >
                  {p.status}
                </span>
              </figure>
              <h3 className="text-[15px] text-secondary">{p.name}</h3>
              <p className="mt-1 text-lg font-bold text-brand">{p.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
