const events = [
  {
    title: 'Opening Keynote',
    date: 'April 17, 2025',
    description:
      'Kick off the conference with an inspiring keynote on the future of technology and innovation.',
    seed: 'huddle-ev-1',
  },
  {
    title: 'Workshop Series',
    date: 'April 18, 2025',
    description:
      'Hands-on workshops covering AI, product design, and scaling startups with industry experts.',
    seed: 'huddle-ev-2',
  },
  {
    title: 'Closing Ceremony',
    date: 'April 21, 2025',
    description:
      'Celebrate the highlights, network with fellow attendees, and look ahead to next year.',
    seed: 'huddle-ev-3',
  },
]

export interface EventsProps {
  className?: string
}

export function Events({ className }: EventsProps) {
  return (
    <section id="events" className={`bg-gray-50 py-16 md:py-24 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold uppercase tracking-wider text-gray-900 md:text-4xl">
          Conference Events
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {events.map((ev) => (
            <div key={ev.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${ev.seed}/600/400`}
                alt={ev.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">
                  {ev.date}
                </p>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{ev.title}</h3>
                <p className="text-sm leading-relaxed text-body">{ev.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
