import { Clock } from 'lucide-react'
import { EVENTS } from '../data'

/**
 * Events — centered "Upcoming Events" heading followed by three event
 * cards: orange date badge (day + month), time, title, blurb and a
 * "Learn More" link.
 */
export function Events() {
  return (
    <section id="events-section" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Upcoming Events</h2>
          <p className="mt-4 text-gray-500">
            Stay connected with campus life. Join our upcoming events, workshops, and activities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {EVENTS.map((event) => (
            <article key={event.title} className="rounded-xl bg-white p-6 shadow-md">
              <div className="flex items-start gap-4">
                <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-white">
                  <span className="text-xl font-bold leading-none">{event.day}</span>
                  <span className="text-xs font-semibold uppercase">{event.month}</span>
                </span>
                <div>
                  <p className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {event.time}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-navy transition-colors hover:text-primary">
                    {event.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">{event.blurb}</p>
              <a href="#events-section" className="mt-3 inline-block font-semibold text-primary">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
