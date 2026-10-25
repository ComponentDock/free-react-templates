import { PROCESS } from '../content'
import { Reveal } from './Reveal'

/** Three steps as an ordered list, each numeral beside a hairline rule. */
export function Process() {
  return (
    <section id="process" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-primary-700">
            {PROCESS.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {PROCESS.heading}
          </h2>
          <p className="mt-4 text-lg font-light text-ink-500">{PROCESS.lede}</p>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {PROCESS.steps.map((step, index) => (
            <li key={step.index} data-process-step className="h-full">
              <Reveal delay={index * 100}>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold tabular-nums text-primary-600">
                    {step.index}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-800">{step.name}</h3>
                <p className="mt-2 text-ink-500">{step.body}</p>
                <p className="mt-3 text-sm font-semibold text-primary-700">{step.note}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
