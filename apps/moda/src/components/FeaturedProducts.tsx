import { ArrowRight, ShoppingCart, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Reveal } from './Reveal'

type Badge = 'new' | 'bestseller' | 'discount' | null

interface Product {
  name: string
  category: string
  rating: number
  price: number
  oldPrice?: number
  badge: Badge
  badgeLabel?: string
  swatches: string[]
  seed: string
}

const products: Product[] = [
  {
    name: 'Minimal Leather Jacket',
    category: 'Clothing',
    rating: 4.8,
    price: 299,
    oldPrice: 399,
    badge: 'discount',
    badgeLabel: '-25%',
    swatches: ['Charcoal', 'Camel', 'Navy'],
    seed: 'moda-2',
  },
  {
    name: 'Cashmere Crewneck Sweater',
    category: 'Clothing',
    rating: 4.9,
    price: 189,
    badge: 'new',
    swatches: ['Cream', 'Heather Gray', 'Forest'],
    seed: 'moda-3',
  },
  {
    name: 'Aviator Sunglasses',
    category: 'Accessories',
    rating: 4.7,
    price: 145,
    badge: 'bestseller',
    swatches: ['Black', 'Tortoise', 'Gold'],
    seed: 'moda-4',
  },
  {
    name: 'Minimalist Leather Sneakers',
    category: 'Footwear',
    rating: 4.8,
    price: 165,
    badge: null,
    swatches: ['White', 'Sand', 'Black'],
    seed: 'moda-5',
  },
  {
    name: 'Automatic Dress Watch',
    category: 'Watches',
    rating: 4.7,
    price: 495,
    badge: null,
    swatches: ['Silver', 'Gold', 'Rose Gold'],
    seed: 'moda-6',
  },
  {
    name: 'Diamond Pendant Necklace',
    category: 'Jewelry',
    rating: 4.9,
    price: 350,
    badge: 'discount',
    badgeLabel: '-19%',
    swatches: ['Silver', 'Gold', 'Platinum'],
    seed: 'moda-7',
  },
  {
    name: 'Italian Wool Overcoat',
    category: 'Clothing',
    rating: 4.8,
    price: 425,
    oldPrice: 525,
    badge: 'new',
    swatches: ['Camel', 'Charcoal', 'Navy'],
    seed: 'moda-8',
  },
  {
    name: 'Performance Running Sneakers',
    category: 'Footwear',
    rating: 4.9,
    price: 295,
    badge: 'new',
    swatches: ['White', 'Red', 'Gray'],
    seed: 'moda-9',
  },
]

const badgeStyles: Record<Exclude<Badge, null>, string> = {
  new: 'bg-emerald-500 text-white',
  bestseller: 'bg-gray-900 text-white',
  discount: 'bg-accent-500 text-white',
}

export function FeaturedProducts() {
  return (
    <section id="featured" className="bg-white py-16 dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Featured Products
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Discover our handpicked selection of trending items
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400"
            >
              View All Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
                  <img
                    src={`https://picsum.photos/seed/${product.seed}/800/1000`}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span
                      className={cn(
                        'absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold',
                        badgeStyles[product.badge],
                      )}
                    >
                      {product.badge === 'discount'
                        ? product.badgeLabel
                        : capitalize(product.badge)}
                    </span>
                  )}
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900/90 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-primary-600"
                    >
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-1">
                    <span
                      aria-label={`rating: ${product.rating} stars`}
                      className="inline-flex items-center gap-1 text-sm"
                    >
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {product.rating}
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-display text-lg font-bold text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    {product.swatches.map((color) => (
                      <span
                        key={color}
                        data-swatch
                        aria-label={`${color} swatch`}
                        title={color}
                        className="h-3.5 w-3.5 rounded-full border border-gray-300 dark:border-gray-600"
                      />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}
