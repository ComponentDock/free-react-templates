const latestEvents = [
  {
    title: 'Prayer & Devotional for Children',
    date: 'May 12, 2018',
    category: 'Children Ministries',
    description:
      'Join us for a special prayer and devotional session designed for our youngest members.',
    image: 'https://picsum.photos/seed/compassion-event1/300/200',
  },
  {
    title: 'We Must Walk In The Middle of The Road',
    date: 'June 8, 2018',
    category: 'Bible Study',
    description: 'A deep dive into balance and moderation in our spiritual journey.',
    image: 'https://picsum.photos/seed/compassion-event2/300/200',
  },
  {
    title: 'Tracts Giving',
    date: 'July 20, 2018',
    category: 'Outreach',
    description: 'Help us spread the word by distributing tracts in our local community.',
    image: 'https://picsum.photos/seed/compassion-event3/300/200',
  },
] as const

export function LatestEvents() {
  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-black">Latest Events</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestEvents.map((event) => (
            <div key={event.title} className="flex gap-4">
              <img
                src={event.image}
                alt={event.title}
                className="h-16 w-16 shrink-0 rounded object-cover"
                loading="lazy"
              />
              <div>
                <h3 className="mb-1 text-sm font-bold text-black">{event.title}</h3>
                <p className="mb-2 text-xs text-gray-400">
                  {event.date}, {event.category}
                </p>
                <p className="text-sm leading-relaxed text-gray-500">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
