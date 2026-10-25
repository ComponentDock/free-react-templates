import { steps } from '../data'

/** Three steps, each an ordinal, a rule, a title, a paragraph and a duration note. */
export function Process() {
  return (
    <section id="process" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">
            How a visit goes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            From booking to a working system
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            You already did step one if you used the picker above.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => (
            <li key={step.title}>
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-primary-600 tabular-nums">
                  {step.ordinal}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-ink-100" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink-800">{step.title}</h3>
              <p className="mt-2 text-ink-500">{step.body}</p>
              <p className="mt-3 text-sm font-semibold text-primary-700">{step.duration}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
