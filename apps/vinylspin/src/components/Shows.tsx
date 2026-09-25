const SHOWS = [
  { date: '18/07', name: 'Electric Castle Festival', location: 'Cluj, Romania' },
  { date: '20/07', name: 'Ultra Music Festival', location: 'Miami, USA' },
  { date: '03/08', name: 'Untold Festival', location: 'Cluj, Romania' },
  { date: '11/08', name: 'Sun Kissed Festival', location: 'Paris, France' },
  { date: '18/08', name: 'Spanish Festival', location: 'Madrid, Spain' },
  { date: '25/08', name: 'Vikings Festival', location: 'Oslo, Norway' },
]

export function Shows() {
  return (
    <section className="bg-void py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-accent-400">
            Events
          </p>
          <h2 className="text-4xl font-bold text-ink">Upcoming Shows</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Shows list */}
          <ul className="flex flex-col gap-0">
            {SHOWS.map((show) => (
              <li
                key={show.date + show.name}
                className="flex items-center border-b border-surface py-4"
              >
                <span className="w-16 text-lg font-bold text-primary-400">{show.date}</span>
                <div className="flex-1">
                  <p className="font-semibold text-ink">{show.name}</p>
                  <p className="text-sm text-muted">{show.location}</p>
                </div>
                <a
                  href="#"
                  className="rounded border border-subtle px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-primary-400 hover:text-ink"
                >
                  Buy Tickets
                </a>
              </li>
            ))}
          </ul>

          {/* Shows image */}
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/vinylspin-shows/400/500"
              alt="Live show"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
