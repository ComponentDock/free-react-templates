import { Clock } from 'lucide-react'

interface Event {
  image: string
  day: string
  month: string
  time: string
  title: string
  description: string
}

const events: Event[] = [
  {
    image: 'polenta-event-1',
    day: '15',
    month: 'Oct',
    time: '7:00 PM – 10:00 PM',
    title: 'Wine & Dine Evening',
    description:
      "Join us for an exclusive evening of curated wine pairings with our chef's special tasting menu.",
  },
  {
    image: 'polenta-event-2',
    day: '22',
    month: 'Oct',
    time: '6:00 PM – 9:00 PM',
    title: 'Italian Cooking Class',
    description:
      'Learn the art of making fresh pasta from our master chef in this hands-on workshop.',
  },
  {
    image: 'polenta-event-3',
    day: '08',
    month: 'Nov',
    time: '7:30 PM – 11:00 PM',
    title: 'Live Jazz Night',
    description:
      'Enjoy smooth jazz performances while savoring our seasonal tasting menu and craft cocktails.',
  },
  {
    image: 'polenta-event-4',
    day: '20',
    month: 'Nov',
    time: '6:00 PM – 8:00 PM',
    title: 'Harvest Festival Dinner',
    description:
      'Celebrate the autumn harvest with a farm-to-table dinner featuring locally sourced ingredients.',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h4 className="font-sans text-base font-normal text-brand">Special Event</h4>
          <h2 className="mt-2 font-display text-4xl text-ink">Upcoming Events</h2>
          <div className="mx-auto mt-4 h-0.5 w-4 bg-brand" />
        </div>

        {/* Events grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-lg border border-border"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${event.image}/800/400`}
                  alt={event.title}
                  loading="lazy"
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Date badge */}
                <div className="absolute bottom-4 left-4 rounded bg-brand px-3 py-2 text-center text-white">
                  <span className="block text-lg font-bold leading-none">{event.day}</span>
                  <span className="text-xs">{event.month}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 flex items-center gap-2 text-sm text-mist">
                  <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
                  {event.time}
                </p>
                <h3 className="font-heading text-lg font-bold text-ink">
                  <a href="#" className="transition-colors hover:text-brand">
                    {event.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
