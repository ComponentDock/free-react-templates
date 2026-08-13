import { investors } from '../data'

/** Investors section (reference `.site-section`): a centered purple heading
 *  followed by a single row of four client logo marks. */
export function Investors() {
  return (
    <section
      id="investors"
      aria-label="Our Investors"
      className="mx-auto max-w-7xl px-4 py-24 lg:px-8"
    >
      <div className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-[#b8b8b8] uppercase">Our Investors</p>
        <h2 className="mt-2 font-heading text-4xl font-bold text-primary-600">Our Investors</h2>
      </div>
      <div className="mt-14 grid grid-cols-2 items-center gap-10 md:grid-cols-4">
        {investors.map((name) => (
          <div
            key={name}
            className="flex h-20 items-center justify-center border border-gray-100 font-heading text-xl font-bold tracking-wide text-[#939393]"
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
