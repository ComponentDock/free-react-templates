import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    id: 1,
    month: 'Oct',
    day: '15',
    date: 'Oct 15, 2026',
    venue: 'The Grand Arena',
    city: 'Los Angeles, CA',
    soldOut: false,
  },
  {
    id: 2,
    month: 'Nov',
    day: '02',
    date: 'Nov 02, 2026',
    venue: 'Neon Hall',
    city: 'New York, NY',
    soldOut: false,
  },
  {
    id: 3,
    month: 'Nov',
    day: '20',
    date: 'Nov 20, 2026',
    venue: 'Skyline Pavilion',
    city: 'Chicago, IL',
    soldOut: true,
  },
  {
    id: 4,
    month: 'Dec',
    day: '08',
    date: 'Dec 08, 2026',
    venue: 'Wave Center',
    city: 'Miami, FL',
    soldOut: false,
  },
]

export function Events() {
  return (
    <section id="events" className="bg-deep-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent-yellow">
            Upcoming Shows
          </p>
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Tour Dates</h2>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-center justify-between gap-4 rounded-xl bg-white/5 px-6 py-5 transition-colors hover:bg-white/10 sm:flex-row"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-brand-700 text-center">
                  <span className="text-xs font-semibold uppercase text-white/70">
                    {event.month}
                  </span>
                  <span className="font-heading text-lg font-bold text-white">{event.day}</span>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white">{event.venue}</h3>
                  <p className="flex items-center gap-1 text-xs text-white/50">
                    <MapPin size={12} />
                    {event.city}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-xs text-white/40">
                  <Calendar size={12} />
                  {event.date}
                </span>
                {event.soldOut ? (
                  <span className="rounded-full bg-white/10 px-5 py-2 text-xs font-semibold text-white/50">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href="#"
                    className="rounded-full bg-accent-purple px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-purple/80"
                  >
                    Get Tickets
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
