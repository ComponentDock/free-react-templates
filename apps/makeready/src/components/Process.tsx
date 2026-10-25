import { process } from '../content'
import { Reveal, SectionIntro, sectionClass } from './ui'

/**
 * Four fixed stages. The grid is the trick: `gap-px` over a `primary-200`
 * ground makes the 1 px ground the divider, so no cell carries a border.
 */
export function Process() {
  return (
    <section id="process" className={`${sectionClass} bg-white dark:bg-gray-950`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={process.eyebrow} title={process.title} lead={process.lead} />

        <ol className="mt-14 grid gap-px bg-primary-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-primary-700">
          {process.stages.map((stage) => (
            <li key={stage.numeral} className="flex flex-col bg-white p-6 dark:bg-gray-950">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-3xl leading-9 font-bold text-accent-500">
                  {stage.numeral}
                </span>
                <span className="font-mono text-[11px] leading-4 tracking-[0.55px] text-primary-500 uppercase dark:text-primary-400">
                  {stage.duration}
                </span>
              </div>
              <h3 className="mt-4 text-lg leading-7 font-bold text-primary-900 dark:text-primary-50">
                {stage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-600 dark:text-primary-300">
                {stage.body}
              </p>
              <div className="mt-6 border-t border-primary-200 pt-3 dark:border-primary-700">
                <p className="font-mono text-[11px] leading-4 tracking-[0.55px] text-primary-500 uppercase dark:text-primary-400">
                  {process.youGet}
                </p>
                <p className="mt-1 text-sm leading-5 text-primary-700 dark:text-primary-200">
                  {stage.deliverable}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {process.footnotes.map((note, index) => (
            <Reveal key={note} delay={index * 80}>
              <p className="flex gap-3 text-sm leading-6 text-primary-600 dark:text-primary-300">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-500" />
                {note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
