import { MEASURE } from '../content'
import { BandHeading, Container, Reveal } from './ui'

/**
 * Five logged metrics as an ordered list: a zero-padded ordinal, a hairline
 * that fills the rest of the column, a bold title, running copy and a violet
 * question label. Items four and five start a second row of three — the ragged
 * tail is part of the design.
 */
export function Measure() {
  return (
    <section id="process" className="section bg-white dark:bg-gray-950">
      <Container>
        <Reveal>
          <BandHeading
            eyebrow={MEASURE.eyebrow}
            heading={MEASURE.heading}
            lede={MEASURE.lede}
            className="max-w-2xl"
          />
        </Reveal>

        <ol className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {MEASURE.items.map((item, index) => (
            <li key={item.number}>
              <Reveal delay={index * 75}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-bold leading-5 tabular-nums text-primary-600 dark:text-primary-400">
                    {item.number}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-100 dark:bg-gray-800" />
                </div>
                <h3 className="mt-4 text-lg font-bold leading-7 text-ink-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-6 text-ink-500 dark:text-gray-300">
                  {item.body}
                </p>
                <p className="mt-3 text-sm font-semibold leading-5 text-primary-700 dark:text-primary-300">
                  {item.label}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
