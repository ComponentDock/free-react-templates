import { ArrowRight } from 'lucide-react'
import { work } from '../data'

/** Portfolio rows (reference `.our_latest_work`): eyebrow + "Creative work
 *  for client" heading, then three alternating image/text rows. */
export function Work() {
  return (
    <section id="portfolio" aria-label="Recent work" className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
          {work.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-[42px] font-bold text-navy-deep">{work.title}</h2>
      </div>

      <div className="mx-auto mt-16 max-w-7xl space-y-20 px-4 lg:px-8">
        {work.rows.map((row, index) => (
          <article
            key={row.title}
            className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
          >
            <img
              src={row.image}
              alt=""
              width={570}
              height={380}
              className="w-full object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-primary-600">
                {row.label}
              </p>
              <h3 className="mt-3 font-heading text-[30px] font-semibold leading-snug text-navy-deep">
                {row.title}
              </h3>
              <p className="mt-5 max-w-lg leading-relaxed text-gray-600">{row.text}</p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium uppercase text-navy-deep transition-colors hover:text-primary-600"
              >
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
