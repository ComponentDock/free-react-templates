import { ShoppingBag } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center bg-gradient-to-br from-bg-light to-white dark:from-gray-900 dark:to-gray-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-heading text-5xl font-bold leading-tight text-heading dark:text-white md:text-6xl">
            Nike New <br />
            Collection!
          </h1>
          <p className="max-w-md text-lg text-ink dark:text-gray-300">
            Discover the latest sneakers and sportswear designed for performance and style. Free
            shipping on all orders.
          </p>
          <div className="flex items-center gap-4">
            <button
              aria-label="Add to bag"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-brand-dark text-white shadow-lg transition-transform hover:scale-105"
            >
              <ShoppingBag size={20} />
            </button>
            <span className="text-sm font-semibold uppercase tracking-wider text-heading dark:text-white">
              Add to Bag
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/mercato-hero/600/600"
            alt="Featured product"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
