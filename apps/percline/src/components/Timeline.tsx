import { TIMELINE } from '../content'
import { Reveal } from './Reveal'

/**
 * The spine of the page: seven rows on the near-black ground, in the order a
 * seller under contract lives them, with the two steps where deals slip marked.
 */
export function Timeline() {
  return (
    <section id="timeline" className="section bg-ink-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-300">
            {TIMELINE.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {TIMELINE.heading}
          </h2>
          <p className="mt-4 text-lg text-white/70">{TIMELINE.lede}</p>
        </Reveal>

        <Reveal className="mt-12">
          <ol>
            {TIMELINE.rows.map((row) => (
              <li
                key={row.index}
                data-timeline-row
                className="grid gap-3 border-l-2 border-white/15 pb-8 pl-6 last:pb-0 sm:grid-cols-12 sm:gap-6"
              >
                <div className="sm:col-span-3">
                  <p className="font-mono text-sm font-bold text-primary-300">{row.day}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/40">
                    {row.actor}
                  </p>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="font-bold text-white">
                    <span className="mr-2 font-mono text-sm text-white/30">{row.index}</span>
                    {row.name}
                  </h3>
                  <p className="mt-1.5 text-white/65">{row.body}</p>
                  {row.callout !== undefined && (
                    <p className="mt-3 rounded-lg border border-primary-400/40 bg-primary-400/10 px-4 py-3 text-sm text-primary-100">
                      <strong className="font-bold">{TIMELINE.calloutLabel}</strong> {row.callout}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm text-white/40">{TIMELINE.footnote}</p>
          <a href="#quote" className="btn btn-primary shrink-0">
            {TIMELINE.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
