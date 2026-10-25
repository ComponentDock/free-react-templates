import { AREAS } from '../content'
import { Reveal } from './Reveal'

/** Twelve towns as ruled rows, beside a heading with no eyebrow. */
export function Areas() {
  return (
    <section id="areas" className="section bg-white">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {AREAS.heading}
          </h2>
          <p className="mt-4 text-lg font-light text-ink-500">{AREAS.lede}</p>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {AREAS.towns.map((town) => (
              <li key={town} className="border-b border-ink-100 py-2.5 text-base text-ink-700">
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-500">{AREAS.footnote}</p>
        </Reveal>
      </div>
    </section>
  )
}
