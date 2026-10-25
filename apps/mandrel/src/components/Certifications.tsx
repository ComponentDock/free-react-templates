import { CERTIFICATIONS, CERTIFICATIONS_COPY } from '../content'
import { Container, Eyebrow } from './ui'

/**
 * Eight credentials in one grid where the 1 px gaps *are* the rules — the
 * shell is `bg-ink-200` and every cell is a white fill on top of it, so adding
 * a border to a cell would double every line.
 */
export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-y border-ink-200 py-12 dark:border-gray-800 dark:bg-gray-950"
    >
      <Container>
        <div className="mb-8">
          <Eyebrow>{CERTIFICATIONS_COPY.eyebrow}</Eyebrow>
          <h2 className="mt-2 text-2xl font-bold text-ink-800 dark:text-white">
            {CERTIFICATIONS_COPY.heading}
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-ink-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-gray-800">
          {CERTIFICATIONS.map((item) => (
            <li key={item.title} className="bg-white p-5 dark:bg-gray-950">
              <p className="text-base font-bold leading-6 tracking-tight text-ink-800 dark:text-white">
                {item.title}
              </p>
              <p className="text-sm leading-5 text-ink-400 dark:text-gray-400">{item.detail}</p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-ink-400 dark:text-gray-400">
          {CERTIFICATIONS_COPY.footnote}
        </p>
      </Container>
    </section>
  )
}
