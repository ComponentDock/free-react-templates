import { useState } from 'react'
import { Heart } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import { products, type Product } from '../data'

function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group relative">
      <div className="relative aspect-square overflow-hidden bg-cloud">
        <img src={product.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        {product.badge ? (
          <span
            className={cn(
              'absolute left-5 top-5 flex h-[25px] items-center px-2.5 font-display text-xs font-bold uppercase text-white',
              product.badge === 'offer' ? 'bg-accent' : 'bg-brand',
            )}
          >
            {product.badgeText}
          </span>
        ) : null}
        <button
          type="button"
          onClick={() => setLiked((value) => !value)}
          aria-label={`Add ${product.name} to favourites`}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-accent"
        >
          <Heart className={cn('h-5 w-5', liked && 'fill-accent text-accent')} />
        </button>
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform group-hover:translate-y-0">
          <Button
            type="button"
            className="h-10 w-full rounded-none bg-ink text-xs font-medium uppercase tracking-[1.5px] text-white hover:bg-accent"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h3 className="font-display text-sm font-medium text-ink dark:text-white">
          {product.name}
        </h3>
        <p className="mt-2 font-display text-2xl font-bold text-accent">
          {product.oldPrice ? (
            <span className="mr-2 text-base font-normal text-muted line-through">
              {product.oldPrice}
            </span>
          ) : null}
          {product.price}
        </p>
      </div>
    </article>
  )
}

export function PopularProducts() {
  return (
    <section aria-label="Popular products" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-semibold capitalize text-ink dark:text-white">
          Popular Products
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
