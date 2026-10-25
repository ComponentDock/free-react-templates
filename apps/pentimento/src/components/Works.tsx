import { paintings, works } from '../content'
import { containerClass, sectionClass, SectionHeading, StatusDot } from './ui'

/** Six paintings, three of them for sale, on one 3 / 2 / 1 grid. */
export function Works() {
  return (
    <section id="works" className={`bg-white dark:bg-gray-950 ${sectionClass}`}>
      <div className={containerClass}>
        <SectionHeading eyebrow={works.eyebrow} title={works.title} lead={works.lead} />

        <ul role="list" className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {paintings.map((painting) => (
            <li key={painting.title} className="group">
              <figure>
                <div className="overflow-hidden rounded-sm bg-primary-100 dark:bg-primary-800">
                  <img
                    src={painting.image}
                    alt={`${painting.title}, ${painting.year}, ${painting.medium}`}
                    width={600}
                    height={750}
                    loading="lazy"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="text-[11px] leading-[16.5px] tracking-[0.18em] text-primary-500 uppercase">
                    {painting.category}
                  </p>
                  <h3 className="mt-2 font-serif text-lg leading-7 text-gray-900 dark:text-white">
                    <em className="italic">{painting.title}</em>
                    <span className="text-primary-500">, {painting.year}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-primary-600 dark:text-primary-300">
                    {painting.medium}
                  </p>
                  <p className="text-sm leading-5 text-primary-500">{painting.size}</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <StatusDot status={painting.status} />
                    {painting.price ? (
                      <span className="ml-auto text-sm leading-5 text-primary-700 tabular-nums dark:text-primary-200">
                        {painting.price}
                      </span>
                    ) : null}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
