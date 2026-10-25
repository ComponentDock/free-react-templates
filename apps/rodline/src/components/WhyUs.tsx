import { Reveal } from './Reveal'
import { why } from '../content'

/**
 * Photograph and copy on the same cool ground. Below 1024 the figure moves
 * *below* the copy, which is the reference's order at every narrow width.
 */
export function WhyUs() {
  return (
    <section id="why-us" className="bg-ink-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure className="order-last lg:order-first">
            <img
              src={why.image}
              alt="A Rodline crew clearing a line at a kitchen sink"
              width={800}
              height={600}
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
            <figcaption className="mt-3 text-sm text-ink-400">{why.caption}</figcaption>
          </figure>

          <Reveal delay={100}>
            <p className="text-sm font-bold tracking-wide text-primary-700 uppercase dark:text-primary-400">
              {why.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl dark:text-white">
              {why.title}
            </h2>
            <p className="mt-4 text-lg text-ink-500 dark:text-gray-400">{why.lede}</p>

            <dl className="mt-8 space-y-6">
              {why.items.map((item) => (
                <div key={item.term} className="border-l-2 border-primary-600 pl-5">
                  <dt className="text-base font-bold text-ink-800 dark:text-white">{item.term}</dt>
                  <dd className="mt-1 text-ink-500 dark:text-gray-400">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
