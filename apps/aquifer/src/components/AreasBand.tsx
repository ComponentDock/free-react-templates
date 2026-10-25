import { TOWNS } from '../data'
import { Reveal } from './Reveal'

/**
 * The service radius, kept honest: twelve towns as hairline rows, two columns on
 * a phone and three from `sm`. The borders are the only structure — there is no
 * card and no map.
 */
export function AreasBand() {
  return (
    <section id="areas" className="section scroll-mt-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Where we work
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Jefferson County and the ring around it. A location fee only means something inside a
              radius we can actually drive on the same day, so we keep the list short and honest.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {TOWNS.map((town) => (
                  <li key={town} className="border-b border-ink-100 py-2.5 text-base text-ink-700">
                    {town}
                  </li>
                ))}
              </ul>
            </Reveal>
            <p className="mt-4 text-sm text-ink-400">
              Replace this list with your own towns. Written as plain text it is the cheapest local
              search signal a trade site has.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
