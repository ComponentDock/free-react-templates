const events = [
  {
    date: '2024-03-15',
    title: 'Free Training for Basic Programming',
    description: 'Join us for an introductory workshop covering programming fundamentals.',
    image: 'https://picsum.photos/seed/cognita-event1/400/250',
  },
  {
    date: '2024-04-20',
    title: '1st Anniversary of Cognita',
    description: 'Celebrate our first year with special guest speakers and networking.',
    image: 'https://picsum.photos/seed/cognita-event2/400/250',
  },
  {
    date: '2024-05-10',
    title: 'Practice Workshop 2024',
    description: 'Hands-on workshop to build real-world projects with expert guidance.',
    image: 'https://picsum.photos/seed/cognita-event3/400/250',
  },
]

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return { month: d.toLocaleString('en', { month: 'short' }), day: d.getDate() }
}

export function Events() {
  return (
    <section id="events" className="bg-section-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          Upcoming Events
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body">
          Even the all-powerful Pointing has no control about the blind texts it is an almost
          unorthographic life.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => {
            const { month, day } = formatDate(e.date)
            return (
              <div
                key={e.title}
                className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute left-3 top-3 rounded bg-primary-500 px-3 py-2 text-center text-white">
                    <span className="block text-xs font-semibold uppercase">{month}</span>
                    <span className="block text-lg font-bold">{day}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-heading">{e.title}</h3>
                  <p className="mt-2 text-sm text-body">{e.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
