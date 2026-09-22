import { EVENTS } from '../data'

/** Events — 3 event cards with image, title, date, and description. */
export function Events() {
  return (
    <section id="events" className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center font-heading text-4xl font-bold text-ink">
          Upcoming Events
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-ink">{event.title}</h3>
                <p className="mt-2 text-sm font-semibold text-brand">{event.date}</p>
                <p className="mt-3 text-muted">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
