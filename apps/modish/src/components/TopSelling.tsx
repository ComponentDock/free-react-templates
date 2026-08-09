import { useState } from 'react'
import { Button, cn } from '@free-react-templates/ui'

interface Product {
  name: string
  price: number
  category: string
  tag?: 'New' | 'ON SALE'
}

const products: Product[] = [
  { name: 'Cotton Poplin Top', price: 25, category: 'TOPS', tag: 'New' },
  { name: 'Satin Blouse', price: 32, category: 'TOPS' },
  { name: 'Playsuit Jumpsuit', price: 48, category: 'JUMPSUITS' },
  { name: 'Lace Lingerie Set', price: 40, category: 'LINGERIE' },
  { name: 'Slim Fit Jeans', price: 55, category: 'JEANS' },
  { name: 'Floral Maxi Dress', price: 60, category: 'DRESSES', tag: 'ON SALE' },
  { name: 'Denim Pinafore Dress', price: 52, category: 'DRESSES' },
  { name: 'Wool Blend Coat', price: 75, category: 'COATS' },
  { name: 'Knit Jumper', price: 45, category: 'JUMPERS' },
  { name: 'Ribbed Leggings', price: 28, category: 'LEGGINGS' },
] as const

const pills = [
  'TOPS',
  'JUMPSUITS',
  'LINGERIE',
  'JEANS',
  'DRESSES',
  'COATS',
  'JUMPERS',
  'LEGGINGS',
] as const

const INITIAL_VISIBLE = 8

export function TopSelling() {
  const [activePill, setActivePill] = useState<string | null>(null)
  const [visible, setVisible] = useState(INITIAL_VISIBLE)

  const filtered =
    activePill === null ? products : products.filter((product) => product.category === activePill)

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const selectPill = (pill: string) => {
    setActivePill(pill)
    setVisible(INITIAL_VISIBLE)
  }

  return (
    <section id="top-selling" className="bg-white pb-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-[0.15em] text-coal dark:text-white">
          Browse Top Selling Products
        </h2>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {pills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => selectPill(pill)}
              aria-pressed={activePill === pill}
              className={cn(
                'rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors',
                activePill === pill
                  ? 'bg-brand text-white'
                  : 'bg-ash text-ink/80 hover:bg-brand hover:text-white dark:bg-gray-800 dark:text-white/80',
              )}
            >
              {pill}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {shown.map((product, index) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-lg bg-snow transition-colors dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/modish-top-${index + 1}/400/500`}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.tag && (
                  <span
                    className={cn(
                      'absolute right-3 top-3 rounded-xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white',
                      product.tag === 'New' ? 'bg-mint' : 'bg-brand',
                    )}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="flex items-baseline justify-between gap-2 p-4">
                <h3 className="text-base font-medium text-coal dark:text-white">{product.name}</h3>
                <p className="text-sm font-bold text-coal dark:text-white">${product.price}.00</p>
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 text-center">
            <Button
              onClick={() => setVisible((current) => current + INITIAL_VISIBLE)}
              className="rounded-full border border-coal bg-transparent px-12 py-3.5 text-xs font-bold uppercase tracking-widest text-coal hover:bg-coal hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-coal"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
