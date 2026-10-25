import { steps } from '../data'
import { Reveal } from './Reveal'

/**
 * Four steps in one column that becomes three at `sm`, so step four starts a
 * second row — the tell in the reference that the grid is a plain
 * three-column. Each step is an ordinal, a 1 px rule, a title, a paragraph and
 * one blue micro-link, which is the only coloured text in the cell.
 */
export function Process() {
  return (
    <section id="process" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-primary-700 uppercase">The letter</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            What it actually means, in plain terms
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A backflow device keeps dirty water from siphoning back into the mains. The authority
            wants proof once a year that yours still closes.
          </p>
        </div>

        <Reveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {steps.map((step) => (
              <li key={step.ordinal}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold text-primary-600 tabular-nums">
                    {step.ordinal}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-800">{step.title}</h3>
                <p className="mt-2 text-ink-500">{step.body}</p>
                <p className="mt-3 text-sm font-semibold text-primary-700">{step.link}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
