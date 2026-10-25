import { AREAS_HEADING, AREAS_LEDE, AREAS_NOTE, TOWNS } from '../content'
import { Reveal } from './Reveal'

/** The one band with an `h2` and no eyebrow, exactly as the reference has it. */
export function Areas() {
  return (
    <section id="areas" className="section bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              {AREAS_HEADING}
            </h2>
            <p className="mt-4 text-lg text-ink-500">{AREAS_LEDE}</p>
            <p className="mt-6 text-sm text-ink-400">{AREAS_NOTE}</p>
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {TOWNS.map((town) => (
                <li key={town} className="border-b border-ink-100 py-2.5 text-ink-700">
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
