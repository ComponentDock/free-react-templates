import { Calendar } from 'lucide-react'

const events = [
  {
    image: 'https://picsum.photos/seed/warmheart-event-1/400/250',
    date: '25th February, 2025',
    title: "The Universe Through A Child's Eyes",
    description:
      'For most of us, the idea of astronomy is something we directly connect to stargazing, telescopes, and watching the night sky.',
  },
  {
    image: 'https://picsum.photos/seed/warmheart-event-2/400/250',
    date: '15th March, 2025',
    title: 'Community Rebuilding Workshop',
    description:
      'Join us for an interactive workshop focused on sustainable rebuilding practices and community resilience strategies.',
  },
  {
    image: 'https://picsum.photos/seed/warmheart-event-3/400/250',
    date: '10th April, 2025',
    title: 'Annual Charity Gala',
    description:
      'An evening of celebration and generosity, bringing together supporters and volunteers to honor our shared mission.',
  },
] as const

export function UpcomingEvents() {
  return (
    <section id="events" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-muted">
            If you are a serious astronomy fanatic like a lot of us are, you can probably remember
            that one event in childhood that started it all.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="overflow-hidden border border-border bg-white shadow-sm"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 bg-brand px-4 py-2 text-xs font-bold text-white">
                  <Calendar className="mr-1 inline-block h-3 w-3" aria-hidden="true" />
                  {event.date}
                </div>
              </div>
              <div className="px-6 pb-6 pt-4">
                <h3 className="mb-2 text-base font-medium text-text-primary">{event.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-text-muted">{event.description}</p>
                <a
                  href="#events"
                  className="inline-block border border-brand bg-transparent px-6 py-2 text-xs font-bold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
