import { deliverables } from '../content'
import { Reveal, SectionIntro } from './ui'

/**
 * The file list, published. Three columns under 2 px charcoal rules — the
 * heaviest rules on the page, and the reason the section reads as a spec sheet.
 */
export function Deliverables() {
  return (
    <section id="deliverables" className="bg-primary-50 py-28 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow={deliverables.eyebrow}
          title={deliverables.title}
          lead={deliverables.lead}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.columns.map((column, index) => (
            <Reveal key={column.title} delay={index * 100}>
              <div className="border-t-2 border-primary-900 pt-4 dark:border-primary-200">
                <h3 className="text-base leading-6 font-bold tracking-[0.8px] text-primary-900 uppercase dark:text-primary-50">
                  {column.title}
                </h3>
                <dl className="mt-4">
                  {column.rows.map((row) => (
                    <div
                      key={row.name}
                      data-testid="deliverable-row"
                      className="border-b border-primary-200 py-2 last:border-b-0 dark:border-primary-800"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="text-sm leading-5 font-medium text-primary-900 dark:text-primary-100">
                          {row.name}
                        </dt>
                        <dd className="shrink-0 text-right font-mono text-[11px] leading-4 tracking-[0.55px] text-primary-500 uppercase dark:text-primary-400">
                          {row.format}
                        </dd>
                      </div>
                      {row.note ? (
                        <p className="mt-1 text-xs leading-4 text-primary-500 dark:text-primary-400">
                          {row.note}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-accent-400 bg-white px-6 py-5 text-sm leading-6 text-primary-700 dark:bg-gray-900 dark:text-primary-200">
          {deliverables.note}
        </p>
      </div>
    </section>
  )
}
