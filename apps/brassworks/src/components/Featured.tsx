import { products, notices } from '../content'

/**
 * The catalogue band: serif headline, then four cards whose bodies are a spec
 * list rather than marketing copy. Prices are trade prices, so the fourth card
 * quotes a hire rate instead.
 */
export function Featured() {
  return (
    <section id="featured" className="section bg-sand-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="eyebrow dark:text-primary-400">This month</p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink-800 sm:text-4xl dark:text-white">
          Lines we are holding deep
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-500 dark:text-gray-400">
          Prices are shown to account holders once you are logged in. Everyone else gets a quote the
          same day, which is usually faster than a cart would be.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <li
              key={product.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/${product.seed}/800/800`}
                alt={`${product.title} in the Brassworks catalogue`}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold text-ink-800 dark:text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-gray-400">{product.blurb}</p>
                <dl className="mt-4 space-y-1.5 border-t border-ink-100 pt-4 text-sm dark:border-gray-800">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between gap-3">
                      <dt className="text-ink-400">{spec.label}</dt>
                      <dd className="text-right font-medium text-ink-700 dark:text-gray-300">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm font-semibold text-primary-700 dark:text-primary-300">
                  {product.price}
                </p>
                <a
                  href="#contact"
                  className="mt-4 block rounded-lg border border-ink-200 px-4 py-2.5 text-center text-sm font-semibold text-ink-700 transition-colors hover:bg-ink-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Request a quote
                </a>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-ink-400">{notices.products}</p>
      </div>
    </section>
  )
}
