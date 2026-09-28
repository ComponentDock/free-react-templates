const events = [
  {
    img: 'https://picsum.photos/seed/seared-ev1/400/250',
    date: 'Dec 15, 2026',
    title: 'Wine Tasting Evening',
    desc: 'Join us for an exclusive wine pairing dinner featuring rare vintages.',
  },
  {
    img: 'https://picsum.photos/seed/seared-ev2/400/250',
    date: 'Jan 5, 2027',
    title: 'New Year Celebration',
    desc: 'Ring in the new year with a gourmet six-course dinner and live jazz.',
  },
  {
    img: 'https://picsum.photos/seed/seared-ev3/400/250',
    date: 'Feb 14, 2027',
    title: "Valentine's Day Special",
    desc: 'A romantic five-course dinner for two with champagne and roses.',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-near-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Events &amp; News
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div
              key={e.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md"
            >
              <img src={e.img} alt={e.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">
                  {e.date}
                </p>
                <h4 className="mb-2 text-base font-bold text-ink">{e.title}</h4>
                <p className="text-sm text-body">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
