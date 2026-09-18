import { events } from '../data'

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink">Upcoming Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-none border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-bold text-ink">{event.title}</h3>
              <a
                href="#"
                className="text-sm font-medium text-brand transition-colors hover:text-brand-hover"
              >
                Know Jesus Christ Better →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
