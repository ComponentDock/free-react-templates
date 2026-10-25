import { AREAS } from '../content'
import { Container, Reveal } from './ui'

/**
 * Twelve served towns on bottom rules beside the section copy: five columns of
 * a twelve-column grid for the copy, seven for the list, two list columns on a
 * phone and three above `sm`.
 */
export function Areas() {
  return (
    <section id="areas" className="section bg-white dark:bg-gray-950">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.9px] text-ink-800 sm:text-4xl dark:text-white">
            {AREAS.heading}
          </h2>
          <p className="mt-3 text-lg leading-7 text-ink-500 dark:text-gray-300">{AREAS.lede}</p>
          <p className="mt-4 text-sm leading-5 text-ink-400 dark:text-gray-400">{AREAS.note}</p>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {AREAS.towns.map((town) => (
              <li
                key={town}
                className="border-b border-ink-100 py-2.5 text-base leading-6 text-ink-700 dark:border-gray-800 dark:text-gray-200"
              >
                {town}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
