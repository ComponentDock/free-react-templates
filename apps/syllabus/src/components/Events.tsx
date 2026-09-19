import { MapPin } from 'lucide-react'

const events = [
  {
    day: '24',
    month: 'Nov',
    title: 'Digital Marketing Summit',
    location: 'New York, USA',
    description: 'Join industry leaders for insights on digital marketing trends.',
    image: 'https://picsum.photos/400/300?random=50',
  },
  {
    day: '15',
    month: 'Dec',
    title: 'WordPress Workshop',
    location: 'London, UK',
    description: 'Hands-on workshop covering WordPress development basics.',
    image: 'https://picsum.photos/400/300?random=51',
  },
  {
    day: '03',
    month: 'Jan',
    title: 'SEO Masterclass',
    location: 'Sydney, Australia',
    description: 'Advanced SEO techniques and strategies for 2025.',
    image: 'https://picsum.photos/400/300?random=52',
  },
]

export function Events() {
  return (
    <section className="px-4 py-20" aria-labelledby="events-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 id="events-heading" className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-3 text-body">Don't miss our latest events and workshops</p>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex flex-col gap-4 overflow-hidden rounded-lg bg-surface shadow-md sm:flex-row"
            >
              <div className="flex shrink-0 items-center justify-center bg-brand px-6 py-4 text-center sm:flex-col">
                <span className="text-2xl font-bold text-ink">{event.day}</span>
                <span className="text-sm font-medium text-ink">{event.month}</span>
              </div>
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full object-cover sm:h-auto sm:w-48"
              />
              <div className="flex flex-col justify-center p-4">
                <h3 className="mb-1 font-heading text-lg font-bold text-ink">{event.title}</h3>
                <div className="mb-2 flex items-center gap-1 text-sm text-brand">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-body">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
