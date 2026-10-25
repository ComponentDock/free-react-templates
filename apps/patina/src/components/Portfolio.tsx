import { portfolio } from '../content'
import { SectionHeading, containerClass, sectionClass } from './ui'

/**
 * Three portrait cards. The caption follows the reference — it appears on hover
 * and on keyboard focus — but the link also carries the name and city as its
 * accessible name, so the band is never three unlabelled photographs.
 */
export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className={`bg-ink-900 ${sectionClass}`}>
      <div className={containerClass}>
        <div id="portfolio-heading">
          <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} lead={portfolio.lead} />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {portfolio.items.map((item, index) => (
            <li
              key={item.name}
              className={index === portfolio.items.length - 1 ? 'col-span-2 lg:col-span-1' : ''}
            >
              <a
                href="#contact"
                aria-label={`${item.name}, ${item.city} — enquire about this room`}
                className="group relative block overflow-hidden focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-none"
              >
                <img
                  src={item.image}
                  alt={`${item.name} in ${item.city}`}
                  width={960}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-end bg-ink-900/0 p-5 opacity-0 transition-opacity duration-300 group-hover:bg-ink-900/55 group-hover:opacity-100 group-focus-visible:bg-ink-900/55 group-focus-visible:opacity-100 motion-reduce:transition-none"
                >
                  <span className="block">
                    <span className="block font-serif text-lg text-white">{item.name}</span>
                    <span className="mt-1 block text-xs font-semibold tracking-[0.18em] text-primary-400 uppercase">
                      {item.city}
                    </span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
