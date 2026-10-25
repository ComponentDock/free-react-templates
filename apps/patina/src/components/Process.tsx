import { process } from '../content'
import { containerClass, sectionClass } from './ui'

/**
 * Three stages in one column below `sm`, each headed by a numeral and a hairline
 * that runs to the column edge. The meta lines are uneven on purpose: a price, a
 * duration and a range answer different questions.
 */
export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className={`bg-ink-800 ${sectionClass}`}>
      <div className={containerClass}>
        <div id="process-heading" className="max-w-2xl">
          <p className="text-sm leading-5 font-bold tracking-wide text-primary-400 uppercase">
            {process.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl leading-10 font-bold tracking-[-0.9px] text-white sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/70">{process.lead}</p>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {process.steps.map((step) => (
            <li key={step.numeral} className="min-w-0">
              <div className="flex items-center gap-3">
                <span className="text-sm leading-5 font-bold tabular-nums text-primary-400">
                  {step.numeral}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="mt-4 text-lg leading-7 font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-lg leading-7 text-white/70">{step.body}</p>
              <p className="mt-3 text-sm leading-5 font-semibold text-primary-400">{step.meta}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
