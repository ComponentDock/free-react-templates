import { CIRCLES } from '../content'
import { SectionHead } from './SectionHead'

/**
 * Six circle cards. The card is a single link target through the heading's
 * `after:` overlay, so there is no nested button and the whole tile is one
 * keyboard stop.
 */
export function Circles() {
  return (
    <section id="circles" aria-label="Circles" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHead
          pill="Circles"
          title="A circle for each part of your life"
          lede="Most people run four or five. They do not overlap, and nobody outside a circle can see that it exists."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CIRCLES.map((circle) => (
            <li
              key={circle.name}
              className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary-500"
            >
              <div className="relative h-32 overflow-hidden">
                <img
                  src={circle.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-700 uppercase backdrop-blur">
                  {circle.access}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold">
                  <a href="#circles" className="after:absolute after:inset-0">
                    {circle.name}
                  </a>
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{circle.blurb}</p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs">
                  <span className="font-bold text-gray-700 tabular-nums">
                    {circle.members} members
                  </span>
                  <span className="text-primary-600">{circle.activity}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
