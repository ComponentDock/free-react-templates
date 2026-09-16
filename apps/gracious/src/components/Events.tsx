import { Clock, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Annual Charity Gala',
    description:
      'Join us for an evening of inspiration and generosity at our annual charity gala event.',
    time: 'Oct 15, 2025 — 7:00 PM',
    venue: 'Grand Ballroom, City Hotel',
    image: 'gracious-event-1',
  },
  {
    title: 'Community Cleanup Day',
    description: 'Help us make our community cleaner and greener. All supplies provided.',
    time: 'Oct 22, 2025 — 9:00 AM',
    venue: 'Central Park, Downtown',
    image: 'gracious-event-2',
  },
  {
    title: 'Food Drive Marathon',
    description: 'Run for a cause. Every kilometer helps feed a family in need.',
    time: 'Nov 5, 2025 — 6:00 AM',
    venue: 'Riverside Track',
    image: 'gracious-event-3',
  },
] as const

export function Events() {
  return (
    <section id="events" className="bg-white py-16 transition-colors lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Upcoming
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Our Events</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${event.image}/400/250`}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex flex-col gap-2 text-xs text-meta">
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-teal" aria-hidden="true" />
                    {event.venue}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold leading-snug text-ink">{event.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{event.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block rounded-none bg-teal px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#5abfd6]"
                >
                  Join Event
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
