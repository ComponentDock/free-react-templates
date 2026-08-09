import { Heart, ShoppingBag } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Product {
  name: string
  price: number
  tag?: 'New' | 'ON SALE'
}

const products: Product[] = [
  { name: 'Flamboyant Pink Top', price: 35, tag: 'New' },
  { name: 'Black and White Stripes Dress', price: 35 },
  { name: 'Ivory Lace Blouse', price: 42 },
  { name: 'Vintage Denim Skirt', price: 38, tag: 'ON SALE' },
  { name: 'Cotton Poplin Top', price: 25, tag: 'New' },
  { name: 'Floral Maxi Dress', price: 60 },
] as const

export function LatestProducts() {
  return (
    <section id="latest" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold uppercase tracking-[0.15em] text-coal dark:text-white">
          Latest Products
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name}
              className="group relative overflow-hidden rounded-lg bg-snow transition-colors dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/modish-product-${index + 1}/400/500`}
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
                <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-coal shadow-lg transition-all hover:bg-brand hover:text-white"
                  >
                    <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to wishlist`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-coal shadow-lg transition-all hover:bg-brand hover:text-white"
                  >
                    <Heart className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-base font-medium text-coal dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-sm font-bold text-coal dark:text-white">${product.price}.00</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
