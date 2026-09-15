const events = [
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'Dec 20th, 2018',
    author: 'Admin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.',
    image: 'https://picsum.photos/seed/devotion-evt1/600/400',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'Dec 20th, 2018',
    author: 'Admin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.',
    image: 'https://picsum.photos/seed/devotion-evt2/600/400',
  },
  {
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: 'Dec 20th, 2018',
    author: 'Admin',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolores culpa qui aliquam placeat nobis veritatis tempora natus rerum obcaecati.',
    image: 'https://picsum.photos/seed/devotion-evt3/600/400',
  },
] as const

export function UpcomingEvents() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-amatic text-4xl font-bold text-navy">
          Upcoming Events
        </h2>
        <div className="grid gap-8 overflow-x-auto sm:grid-cols-2 lg:grid-cols-3">
          {events.map((evt, i) => (
            <div key={i} className="shrink-0">
              <img
                src={evt.image}
                alt={evt.title}
                className="mb-4 w-full rounded object-cover"
                loading="lazy"
              />
              <h3 className="mb-1 text-lg font-semibold text-navy">
                <a href="#" className="hover:text-brand">
                  {evt.title}
                </a>
              </h3>
              <p className="mb-2 text-xs text-gray-500">
                {evt.date} &bull; By{' '}
                <a href="#" className="text-brand hover:text-brand-dark">
                  {evt.author}
                </a>
              </p>
              <p className="text-sm text-gray-600">{evt.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
