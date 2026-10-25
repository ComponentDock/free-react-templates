import { ButtonLink } from '@free-react-templates/ui'
import { categories } from '../content'

/** Copy over a card row — no photographic hero, the categories are the image. */
export function Hero() {
  return (
    <section className="border-b border-ink-200 bg-white py-12 lg:py-16 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="eyebrow dark:text-primary-400">Sacramento · Counter and showroom</p>
        <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-tight text-ink-800 sm:text-5xl dark:text-white">
          Fixtures, water heaters and fittings, in stock.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-500 dark:text-gray-400">
          Four thousand lines held on site, trade pricing on account, and a showroom where you can
          actually turn the taps on before specifying them.
        </p>
        <div className="mt-6">
          <ButtonLink href="#trade" className="px-6 py-3">
            Open a trade account
          </ButtonLink>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#featured"
                className="block overflow-hidden rounded-xl border border-ink-200 bg-ink-50 transition-colors hover:border-primary-500 dark:border-gray-800 dark:bg-gray-950"
              >
                <img
                  src={`https://picsum.photos/seed/${category.seed}/800/600`}
                  alt={`${category.name} on the counter at Brassworks`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="block p-4">
                  <span className="block text-base font-semibold text-ink-800 dark:text-white">
                    {category.name}
                  </span>
                  <span className="mt-0.5 block text-sm text-ink-400">{category.count}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
