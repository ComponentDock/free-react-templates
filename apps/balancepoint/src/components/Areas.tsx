import { AREAS_COPY, TOWNS } from '../content'
import { Container } from './ui'

/** White band, 5 / 7 split: the claim on the left, twelve plain town names right. */
export function Areas() {
  return (
    <section id="areas" className="section bg-white dark:bg-gray-950">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
            {AREAS_COPY.heading}
          </h2>
          <p className="mt-3 text-lg leading-7 text-ink-500 dark:text-gray-300">{AREAS_COPY.lede}</p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {TOWNS.map((town) => (
              <li
                key={town}
                className="border-b border-ink-100 py-3 text-base leading-6 text-ink-700 dark:border-gray-800 dark:text-gray-200"
              >
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-5 text-ink-500 dark:text-gray-400">
            {AREAS_COPY.footnote}
          </p>
        </div>
      </Container>
    </section>
  )
}
