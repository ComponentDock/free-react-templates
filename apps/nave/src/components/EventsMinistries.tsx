const EVENTS = [
  {
    title: 'Prayer & Devotional for Children',
    date: 'May 12, 2018',
    category: 'Children Ministries',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati, totam recusandae iure non nemo.',
    image: 'https://picsum.photos/seed/nave-event-1/600/400',
  },
  {
    title: 'We Must Walk In The Middle of The Road',
    date: 'May 12, 2018',
    category: 'Missions',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati, totam recusandae iure non nemo.',
    image: 'https://picsum.photos/seed/nave-event-2/600/400',
  },
  {
    title: 'Tracts Giving',
    date: 'May 12, 2018',
    category: 'Care Ministry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed obcaecati, totam recusandae iure non nemo.',
    image: 'https://picsum.photos/seed/nave-event-3/600/400',
  },
]

export function EventsMinistries() {
  return (
    <section className="bg-dark py-12" aria-label="Events and ministries">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block bg-brand px-4 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Ministries
          </span>
          <h2 className="font-heading text-3xl text-white">Events &amp; Ministries</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.title} className="flex gap-4">
              <img
                src={event.image}
                alt={event.title}
                className="h-[80px] w-[120px] flex-shrink-0 object-cover"
              />
              <div>
                <h3 className="font-heading text-lg text-white">
                  <a href="#" className="transition-opacity hover:opacity-80">
                    {event.title}
                  </a>
                </h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-white/50">
                  {event.date},{' '}
                  <a href="#" className="text-white transition-opacity hover:opacity-80">
                    {event.category}
                  </a>
                </p>
                <p className="mt-2 text-sm text-text-muted">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
