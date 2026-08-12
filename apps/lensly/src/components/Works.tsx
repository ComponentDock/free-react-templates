import { WORKS } from '../data'

/* div.site-section (white) — centered header: amber "My Works" eyebrow +
   serif h2 "See My Works"; 12-tile grid (4/3/2 cols) of portfolio items
   with radius 4px, hover overlay rgba(0,0,0,.4) + image scale(1.1) and a
   centered icon/label that fades in. */
export function Works() {
  return (
    <section id="works" className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-widest text-brand uppercase">
            My Works
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            See My Works
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {WORKS.map((work) => (
            <div key={work.label} className="group relative overflow-hidden rounded bg-gray-100">
              <img
                src={work.src}
                alt={work.label}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40 group-focus-within:bg-black/40"
                aria-hidden="true"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                <work.Icon className="h-8 w-8 text-white" aria-hidden="true" />
                <span className="text-sm font-medium text-white">{work.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
