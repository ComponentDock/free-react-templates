import { cn } from '@free-react-templates/ui'

const EVENTS = [
  {
    title: 'Summer Gala Night',
    date: 'February 26, 2018',
    image: 'https://picsum.photos/seed/casamora-event1/800/600',
  },
  {
    title: 'Wine & Dine Evening',
    date: 'February 26, 2018',
    image: 'https://picsum.photos/seed/casamora-event2/800/600',
  },
  {
    title: 'Beach Party',
    date: 'February 26, 2018',
    image: 'https://picsum.photos/seed/casamora-event3/800/600',
  },
] as const

interface EventsProps {
  className?: string
}

export function Events({ className }: EventsProps) {
  return (
    <section id="events" className={cn('bg-light-bg py-20', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-semibold text-heading-text">Events</h2>
          <span className="mx-auto mb-8 block h-1 w-12 rounded bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {EVENTS.map((event) => (
            <article key={event.title} className="overflow-hidden bg-white shadow-sm">
              <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-body-text">
                  {event.date}
                </p>
                <a
                  href="#"
                  className="font-heading text-lg font-semibold text-heading-text transition-colors hover:text-brand"
                >
                  {event.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
