import { Delete } from 'lucide-react'
import { SERVICES } from '../data'

/* "Services" section: five equal numbered white cards in a row, each with
   a small uppercase gray number, a bold title and a right-pointing arrow
   icon near the bottom-left corner; cards lift on hover. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-smoke pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-[34px] font-bold text-ink">{SERVICES.heading}</h2>
          <p className="text-lg leading-relaxed text-muted">{SERVICES.lead}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.items.map((item) => (
            <article
              key={item.number}
              className="relative bg-white p-[30px] pb-[90px] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="mb-[30px] block text-xs font-bold uppercase text-faint">
                {item.number}
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink">{item.title}</h3>
              <Delete
                aria-hidden="true"
                className="absolute bottom-6 left-6 size-6 rotate-180 text-ink/40"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
