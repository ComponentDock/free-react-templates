import { INDUSTRIES } from '../content'
import { containerClass, SectionHeading } from './ui'

/** One bordered wrapper whose 1 px gaps are the rules — not six cards. */
export function Industries() {
  return (
    <section id="industries" className="bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading title={INDUSTRIES.title} lead={INDUSTRIES.lead} eyebrow={INDUSTRIES.eyebrow} />

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3 dark:border-gray-800 dark:bg-gray-800">
          {INDUSTRIES.cells.map((cell) => (
            <article
              key={cell.title}
              data-testid="industry-cell"
              className="flex flex-col bg-white p-8 dark:bg-gray-950"
            >
              <h3 className="text-lg leading-7 font-bold text-ink-800 dark:text-white">{cell.title}</h3>
              <p className="mt-2 flex-1 text-base leading-6 text-ink-500">{cell.blurb}</p>
              <p className="mt-4 text-sm leading-5 font-bold text-primary-700">
                {`From ${cell.rate}c per sq ft per month`}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-5 text-ink-400">{INDUSTRIES.note}</p>
      </div>
    </section>
  )
}
