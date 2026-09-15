import { Calendar, MapPin } from 'lucide-react'
import { events } from '../data'

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-heading">Upcoming Events</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded border border-border p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-sm text-muted">
                <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                <time>{event.date}</time>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-heading">{event.title}</h3>
              <div className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
