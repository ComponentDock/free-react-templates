const nextEvents = [
  {
    id: 1,
    title: 'U2 Concert in Detroit',
    date: 'Saturday',
    span: 'Jan 27, 2024',
    rating: '8.9',
    description: 'Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui.',
    image: 'lineup-next-1',
  },
  {
    id: 2,
    title: 'TED Talk California',
    date: 'Saturday',
    span: 'Feb 15, 2024',
    rating: '7.9',
    description:
      'Eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus.',
    image: 'lineup-next-2',
  },
  {
    id: 3,
    title: 'Ultra Music Miami',
    date: 'Saturday',
    span: 'Mar 10, 2024',
    rating: '9.9',
    description: 'Lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus risus.',
    image: 'lineup-next-3',
  },
]

export function NextEvents() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 max-w-2xl text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
            Our next events
          </h2>
          <p className="leading-relaxed text-[var(--color-muted)]">
            Vestibulum eget lacus at mauris sagittis varius. Etiam ut venenatis dui. Nullam tellus
            risus, pellentesque at facilisis et, scelerisque sit amet metus.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {nextEvents.map((event) => (
            <article key={event.id} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${event.image}/600/400`}
                  alt={event.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full bg-[var(--color-rating)] px-3 py-1 text-sm font-bold text-white">
                  {event.rating}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[var(--color-heading)]">
                  {event.title}
                </h3>
                <p className="mb-1 text-sm text-[var(--color-muted)]">
                  {event.date}{' '}
                  <span className="font-medium text-[var(--color-body)]">{event.span}</span>
                </p>
                <p className="mb-4 text-sm leading-relaxed text-[var(--color-muted)]">
                  {event.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-bold text-[var(--color-primary-start)] hover:underline"
                >
                  Buy Tickets
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
