const events = [
  {
    title: 'Summer Gala Dinner',
    date: 'August 15, 2026',
    excerpt:
      'Join us for an elegant evening of fine dining, live music, and stunning views under the stars.',
    image: 'https://picsum.photos/seed/lodgely-event1/600/400',
  },
  {
    title: 'Wine Tasting Night',
    date: 'September 20, 2026',
    excerpt:
      'Explore curated wines from around the world with our expert sommelier guiding the way.',
    image: 'https://picsum.photos/seed/lodgely-event2/600/400',
  },
  {
    title: "New Year's Eve Celebration",
    date: 'December 31, 2026',
    excerpt:
      'Ring in the new year with a spectacular party featuring fireworks, music, and celebrations.',
    image: 'https://picsum.photos/seed/lodgely-event3/600/400',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="overflow-hidden rounded bg-white shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-400">
                  {event.date}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-ink">{event.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{event.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
