import { SAMPLE_TOWNS, TOWNS } from '../data'

/**
 * Twelve towns as hairline rows. No cards, no map, no pins — written as plain
 * text this is the cheapest local search signal a trade site has, and the
 * footnote says as much.
 */
export function Areas() {
  return (
    <section id="areas" className="section bg-white" aria-labelledby="areas-title">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="areas-title" className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Where we work
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Greater Richmond. We carry the common tank sizes on the truck, which is what makes a
              same-day swap possible inside this list.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {TOWNS.map((town) => (
                <li key={town} className="border-b border-ink-100 py-2.5 text-base text-ink-700">
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-400">{SAMPLE_TOWNS}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
