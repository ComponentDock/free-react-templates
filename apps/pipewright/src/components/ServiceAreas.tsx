import { AREAS } from '../content'
import { Container } from './ui'

/**
 * Five/seven split with a sans heading and a ruled grid of twelve towns: each
 * item carries a bottom rule only, so the grid reads as ruled columns rather
 * than a deck of cards.
 */
export function ServiceAreas() {
  return (
    <section id="service-areas" className="section bg-white">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            {AREAS.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">{AREAS.intro}</p>
        </div>

        <div className="lg:col-span-7">
          <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
            {AREAS.towns.map((town) => (
              <li key={town} className="border-b border-ink-100 py-2.5 text-ink-700">
                {town}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-ink-400">{AREAS.note}</p>
        </div>
      </Container>
    </section>
  )
}
