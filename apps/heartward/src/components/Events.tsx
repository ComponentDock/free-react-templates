import { events } from '../data'

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Upcoming Event</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden rounded bg-light shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                />
                <span className="absolute right-0 top-0 bg-dark/80 px-5 py-4 font-heading text-sm font-bold text-white">
                  {event.date}
                </span>
              </div>
              <div className="p-6">
                <h4 className="mb-3 font-heading text-lg font-bold text-ink">{event.title}</h4>
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-ink">{event.days}</p>
                    <p className="text-xs text-gray-500">Days</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-ink">{event.hours}</p>
                    <p className="text-xs text-gray-500">Hours</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-ink">{event.minutes}</p>
                    <p className="text-xs text-gray-500">Minutes</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
