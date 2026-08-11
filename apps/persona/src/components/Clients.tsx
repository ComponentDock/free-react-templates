import { clientSeeds, clientsTitle, imgUrl } from '../data'

/** Clients strip: a row of grayscale placeholder logo marks (seeded images,
 *  desaturated with the Tailwind grayscale filter). */
export function Clients() {
  return (
    <section id="clients" aria-label={clientsTitle} className="bg-mist py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center text-3xl font-bold text-ink lg:text-4xl">{clientsTitle}</h2>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {clientSeeds.map((seed, index) => (
            <li key={seed}>
              <img
                src={imgUrl(seed, 160, 80)}
                alt={`Client ${index + 1}`}
                className="h-16 w-32 object-cover grayscale transition-all hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
