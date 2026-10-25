import { PRODUCTS } from '../content'
import { ActionLink, Container, Eyebrow } from './ui'

/**
 * The catalogue: four cards on the cream band, each a square device
 * photograph, a serif title, three specification rows and a price that says
 * "installed" — the page sells appliances, so specs come before the ask.
 */
export function Products() {
  return (
    <section id="products" className="section bg-sand-50 dark:bg-gray-900">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow weight="bold">{PRODUCTS.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-10 text-ink-800 sm:text-4xl dark:text-white">
            {PRODUCTS.heading}
          </h2>
          <p className="mt-4 text-lg leading-[1.625] text-ink-500 dark:text-gray-300">
            {PRODUCTS.lede}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.items.map((product) => (
            <li
              key={product.id}
              id={product.id}
              data-product-card
              className="flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white dark:border-gray-800 dark:bg-gray-800"
            >
              <img
                src={product.image}
                alt={`Placeholder photograph standing in for the ${product.name.toLowerCase()}`}
                width={600}
                height={600}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold leading-7 text-ink-800 dark:text-white">
                  <a href={`#${product.id}`} className="transition-colors hover:text-primary-700">
                    {product.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-5 text-ink-500 dark:text-gray-300">
                  {product.blurb}
                </p>
                <dl className="mt-4 space-y-2 border-t border-ink-100 pt-3 text-sm dark:border-gray-700">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-baseline justify-between gap-2">
                      <dt className="text-ink-400 dark:text-gray-400">{spec.label}</dt>
                      <dd className="text-right font-medium text-ink-800 dark:text-gray-100">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-sm font-semibold leading-5 text-primary-700 dark:text-primary-300">
                  {product.price}{' '}
                  <span className="font-normal text-ink-400 dark:text-gray-400">
                    {product.note}
                  </span>
                </p>
                <ActionLink href="#contact" variant="outline" size="sm" className="mt-4 w-full">
                  {PRODUCTS.cta}
                </ActionLink>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm leading-5 text-ink-400 dark:text-gray-400">
          {PRODUCTS.footnote}
        </p>
      </Container>
    </section>
  )
}
