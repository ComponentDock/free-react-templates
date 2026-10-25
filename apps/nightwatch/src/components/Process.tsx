import { PROCESS } from '../content'
import { containerClass, SectionHeading } from './ui'

/** Four steps in a three-column grid — 3 + 1, exactly as measured. */
export function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className={containerClass}>
        <SectionHeading title={PROCESS.title} lead={PROCESS.lead} eyebrow={PROCESS.eyebrow} />

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {PROCESS.steps.map((step, index) => (
            <li key={step.title} data-testid="step">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm leading-5 font-bold text-primary-600 tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-ink-100 dark:bg-gray-800" />
              </div>
              <h3 className="mt-4 text-lg leading-7 font-bold text-ink-800 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-ink-500">{step.body}</p>
              <p className="mt-3 text-sm leading-5 font-semibold text-primary-700">{step.tag}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
