import { brands } from '../data'

/** Grayscale client-logo strip on the same light-gray background as the
 *  services section (recreated as text marks — no assets copied). */
export function Brands() {
  return (
    <section aria-label="Client logos" className="bg-section pb-10 pt-12">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-4 opacity-70 grayscale">
        {brands.map((name) => (
          <li key={name} className="text-2xl font-semibold uppercase tracking-[0.2em] text-ink">
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}
