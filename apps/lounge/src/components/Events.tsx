const events = [
  {
    day: '12',
    month: 'July',
    year: '2026',
    title: 'Summer Beach Gala',
    description:
      'Join us for an unforgettable evening of music, dancing, and cocktails under the stars at our annual Summer Beach Gala.',
  },
  {
    day: '05',
    month: 'August',
    year: '2026',
    title: 'Sunset Wine Tasting',
    description:
      'Experience a curated selection of fine wines paired with artisanal cheeses as the sun sets over the ocean.',
  },
]

export function Events() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
            Join Event
          </p>
          <h2 className="font-heading text-3xl font-bold text-lounge-900 md:text-4xl">
            Our Events
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/lounge-event/800/500"
              alt="Events"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center gap-8">
            {events.map((event) => (
              <div key={event.title} className="flex gap-5">
                <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-brand text-center text-white">
                  <span className="text-2xl font-bold leading-none">{event.day}</span>
                  <span className="text-xs">{event.month}</span>
                  <span className="text-xs">{event.year}</span>
                </div>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-bold text-lounge-900">
                    {event.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-lounge-500">
                    {event.description}
                  </p>
                  <div className="flex gap-3">
                    <button className="rounded bg-brand px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-hover">
                      Join event
                    </button>
                    <button className="rounded border border-lounge-300 px-4 py-1.5 text-xs font-semibold text-lounge-600 transition-colors hover:bg-lounge-100">
                      See details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
