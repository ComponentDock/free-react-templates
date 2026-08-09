import { useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'

interface Product {
  name: string
  price: number
  category: string
  sale?: boolean
}

const products: Product[] = [
  { name: 'Cotton Poplin Top', price: 25, category: 'TOPS', sale: true },
  { name: 'Satin Blouse', price: 32, category: 'TOPS' },
  { name: 'Playsuit Jumpsuit', price: 48, category: 'JUMPSUITS' },
  { name: 'Lace Lingerie Set', price: 40, category: 'LINGERIE' },
  { name: 'Slim Fit Jeans', price: 55, category: 'JEANS' },
  { name: 'Floral Maxi Dress', price: 60, category: 'DRESSES', sale: true },
  { name: 'Denim Pinafore Dress', price: 52, category: 'DRESSES' },
  { name: 'Wool Blend Coat', price: 75, category: 'COATS' },
  { name: 'Knit Jumper', price: 45, category: 'JUMPERS' },
  { name: 'Ribbed Leggings', price: 28, category: 'LEGGINGS' },
] as const

const tabs = [
  'TOPS',
  'JUMPSUITS',
  'LINGERIE',
  'JEANS',
  'DRESSES',
  'COATS',
  'JUMPERS',
  'LEGGINGS',
  'ON SALE',
] as const

const INITIAL_VISIBLE = 6

export function TopSelling() {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const [visible, setVisible] = useState(INITIAL_VISIBLE)

  const filtered =
    activeTab === 'ON SALE'
      ? products.filter((product) => product.sale)
      : activeTab === null
        ? products
        : products.filter((product) => product.category === activeTab)

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const selectTab = (tab: string) => {
    setActiveTab(tab)
    setVisible(INITIAL_VISIBLE)
  }

  return (
    <section id="top-selling" className="bg-fog py-16 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold uppercase tracking-[0.2em] text-coal dark:text-white">
          Browse Top Selling Products
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => selectTab(tab)}
              aria-pressed={activeTab === tab}
              className={cn(
                'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors',
                activeTab === tab
                  ? 'border-brand bg-brand text-white'
                  : 'border-ink/20 text-ink/70 hover:border-brand hover:text-brand dark:border-white/20 dark:text-white/70',
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {shown.map((product, index) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-colors dark:bg-gray-800"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/modish-top-${index + 1}/400/500`}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.sale && (
                  <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    On Sale
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-sm font-medium text-coal dark:text-white">{product.name}</h3>
                <p className="text-sm font-semibold text-brand">${product.price}.00</p>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setVisible((current) => current + INITIAL_VISIBLE)}
              className="rounded-full border border-brand bg-transparent px-10 py-3 text-xs font-semibold uppercase tracking-widest text-brand hover:bg-brand hover:text-white"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
