import { INCLUSIONS, SERVICE_TOWNS, SECTORS } from '../data'
import { CellGrid } from './CellGrid'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/** What the monthly fee actually contains: six cells over a hairline gutter. */
export function Agreement() {
  return (
    <section id="agreement" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="What an agreement includes"
          title="The parts other proposals leave to be discovered"
          lede="Every line below is in the monthly figure. A proposal that leaves them out is not cheaper, it is incomplete, and the difference arrives as variations."
        />

        <Reveal>
          <CellGrid cells={INCLUSIONS} />
        </Reveal>
        <p className="mt-6 text-sm text-ink-400">
          Sample inclusions for demonstration. Replace with your own scope before launch.
        </p>
      </div>
    </section>
  )
}

/** Where a failure costs money: the same grid kit, six building types. */
export function Sectors() {
  return (
    <section id="sectors" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHead
          eyebrow="Buildings we look after"
          title="Where the failure costs something"
          lede="Not every building needs an agreement. These are the ones where an afternoon without cooling is a real number."
        />

        <Reveal>
          <CellGrid cells={SECTORS} />
        </Reveal>
        <p className="mt-6 text-sm text-ink-400">
          Sample sectors for demonstration. Replace with your own before launch.
        </p>
      </div>
    </section>
  )
}

/** The service radius, kept honest: twelve towns as hairline rows. */
export function Areas() {
  return (
    <section id="areas" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Where we work
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Tarrant County and the western half of the metroplex. Response tiers only mean
              something inside a radius we can actually hold, so we keep the map honest.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {SERVICE_TOWNS.map((town) => (
                <li key={town} className="border-b border-ink-100 py-2.5 text-base text-ink-700">
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-400">
              Replace this list with your own towns. Written as plain text it is the cheapest local
              search signal a services site has.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
