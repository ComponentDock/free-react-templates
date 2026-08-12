import { ArrowRight } from 'lucide-react'
import { DELIVERIES_TITLE, DELIVERY_ADDRESS, DELIVERY_CARDS } from '../data'

/**
 * Recent deliveries — card grid (source `section.deliveries_part`): four
 * cargo cards, each with a photo, title, the shared Melbourne address, and a
 * "check now" link.
 */
export function Deliveries() {
  return (
    <section className="bg-white py-20" aria-label="Recent deliveries">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <h2 className="text-center font-display text-4xl font-bold text-ink">{DELIVERIES_TITLE}</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DELIVERY_CARDS.map((card) => (
            <article key={card.title} className="rounded-[4px] bg-soft p-5">
              <img
                src={`https://picsum.photos/seed/${card.seed}/370/240`}
                alt={card.title}
                className="h-44 w-full object-cover"
              />
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{DELIVERY_ADDRESS}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand transition-colors hover:text-accent"
              >
                check now
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
