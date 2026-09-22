import { MapPin } from 'lucide-react'
import { events, eventsTitle, eventsSubtitle } from '../data'

export function Events() {
  return (
    <section id="events-section" aria-label="Events" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink">{eventsTitle}</h2>
          <p className="mt-4 text-body">{eventsSubtitle}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="rounded-lg border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-brand">{event.day}</span>
                  <span className="text-sm text-muted">{event.month}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted">
                    Organized by: <span className="font-medium text-ink">{event.organizer}</span>
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-ink">{event.title}</h3>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-2 border-t border-gray-100 pt-4">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                <p className="text-sm text-muted">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
