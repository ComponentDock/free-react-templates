import { Delete } from 'lucide-react'
import { STARTUP } from '../data'

/* "Startup" section: centered heading + lead, then two alternating media
   rows (row 1 text-box left / image right, row 2 image left / text right).
   The arrow buttons point right, echoing the source's backspace-key arrow
   glyph rotated 180°. */
export function Startup() {
  return (
    <section id="startup" aria-label="Startup" className="bg-smoke py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 font-display text-[34px] font-bold text-ink">{STARTUP.heading}</h2>
          <p className="text-lg leading-relaxed text-muted">{STARTUP.lead}</p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="bg-white p-10">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-ink">
              {STARTUP.rowOne.lead}
            </p>
            <p className="mb-6 leading-relaxed text-muted">{STARTUP.rowOne.body}</p>
            <ul className="mb-8 space-y-3">
              {STARTUP.rowOne.bullets.map((bullet) => (
                <li key={bullet} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-brand/50" />
                  <span className="text-list">{bullet}</span>
                </li>
              ))}
            </ul>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[.1rem] text-ink ring-1 ring-black/10 transition-colors hover:bg-brand hover:text-white hover:ring-brand"
            >
              {STARTUP.rowOne.actionLabel}
              <Delete aria-hidden="true" className="size-4 rotate-180" />
            </a>
          </div>
          <img
            src={STARTUP.rowOne.image}
            alt={STARTUP.rowOne.imageAlt}
            loading="lazy"
            className="w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <img
            src={STARTUP.rowTwo.image}
            alt={STARTUP.rowTwo.imageAlt}
            loading="lazy"
            className="w-full rounded-lg object-cover lg:order-1"
          />
          <div className="lg:order-2">
            <h3 className="mb-4 font-display text-2xl font-bold text-ink">
              {STARTUP.rowTwo.heading}
            </h3>
            <p className="mb-8 leading-relaxed text-muted">{STARTUP.rowTwo.body}</p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[.1rem] text-ink ring-1 ring-black/10 transition-colors hover:bg-brand hover:text-white hover:ring-brand"
            >
              {STARTUP.rowTwo.actionLabel}
              <Delete aria-hidden="true" className="size-4 rotate-180" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
