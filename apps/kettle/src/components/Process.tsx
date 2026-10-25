import { STEPS } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Three steps in an ordered list, each headed by a monospaced numeral and a
 * hairline that runs to the column's edge. The duration labels are the
 * persuasive part: a trade page that will put a time on each stage is making a
 * claim the visitor can hold it to.
 */
export function Process() {
  return (
    <section id="process" className="section bg-white" aria-labelledby="process-title">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="How it goes"
          title="From no hot water to hot water"
          lede="Three steps, and the first one you can do on this page."
        />

        <Reveal className="mt-12">
          <ol className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {STEPS.map((step, index) => (
              <li key={step.name}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold tabular-nums text-primary-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-800">{step.name}</h3>
                <p className="mt-2 text-ink-500">{step.body}</p>
                <p className="mt-3 text-sm font-semibold text-primary-700">{step.duration}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
