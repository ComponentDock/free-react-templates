import { PROCESS_COPY, STEPS } from '../content'
import { BandHeading, Container } from './ui'

/**
 * Three numbered steps, each opened by a number and a hairline that fills the
 * rest of the column, and each signed off with a promise.
 */
export function Process() {
  return (
    <section id="process" className="section bg-white dark:bg-gray-950">
      <Container>
        <BandHeading
          eyebrow={PROCESS_COPY.eyebrow}
          heading={PROCESS_COPY.heading}
          lede={PROCESS_COPY.lede}
          deep
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title}>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tabular-nums text-primary-600 dark:text-primary-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-px flex-1 bg-ink-100 dark:bg-gray-800" />
              </div>
              <h3 className="mt-4 text-lg font-bold leading-7 text-ink-800 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-ink-500 dark:text-gray-300">
                {step.body}
              </p>
              <p className="mt-3 text-sm font-bold text-primary-700 dark:text-primary-400">
                {step.promise}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
