import { areasFootnote, areasLead, towns } from '../data'

/** Plain text in three columns — no map, no pins; the list is the local-search signal. */
export function Areas() {
  return (
    <section id="areas" className="section-band scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
              Where we work
            </h2>
            <p className="mt-4 text-lg text-ink-500">{areasLead}</p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {towns.map((town) => (
                <li key={town} className="border-b border-ink-100 py-2.5 text-base text-ink-700">
                  {town}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-500">{areasFootnote}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
