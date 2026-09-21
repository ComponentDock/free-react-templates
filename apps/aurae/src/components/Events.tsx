import { Calendar, Users } from 'lucide-react'

const events = [
  {
    title: 'Lole White Yoga Tour',
    image: 'https://picsum.photos/seed/aurae-event1/400/300',
    date: 'Dec 15, 2026',
    participants: 120,
  },
  {
    title: 'Free Yoga Madrid',
    image: 'https://picsum.photos/seed/aurae-event2/400/300',
    date: 'Jan 22, 2027',
    participants: 85,
  },
  {
    title: 'One Love Dallas',
    image: 'https://picsum.photos/seed/aurae-event3/400/300',
    date: 'Feb 10, 2027',
    participants: 200,
  },
] as const

export function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Join our community events and deepen your yoga practice with fellow enthusiasts
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">{event.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-sm text-mist">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" aria-hidden="true" />
                    {event.participants} attendees
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
