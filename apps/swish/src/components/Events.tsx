import { Calendar, Clock } from 'lucide-react'
import { events } from '../data'
import { SectionTitle } from './SectionTitle'

export function Events() {
  return (
    <section id="events" className="py-16 md:py-24" aria-label="Upcoming event">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle overline="Upcoming Event" title="Land Morning Blessed" />
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <article
              key={`${event.day}-${index}`}
              className="flex gap-6 border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center bg-brand text-white">
                <span className="font-display text-3xl font-bold leading-none">{event.day}</span>
                <span className="mt-1 text-xs font-medium tracking-widest uppercase">
                  {event.month}
                </span>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm text-brand">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {event.time}
                </p>
                <h3 className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-ink">
                  <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                  {event.name}
                </h3>
                <p className="mt-2 leading-relaxed text-body">{event.description}</p>
                <a
                  href="#events"
                  className="mt-4 inline-block bg-brand px-6 py-2.5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-brand-dark"
                  style={{ borderBottom: '4px solid #fdcb9e' }}
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
