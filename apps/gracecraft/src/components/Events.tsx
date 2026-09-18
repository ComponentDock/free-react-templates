import { Calendar, MapPin } from 'lucide-react'

interface EventData {
  title: string
  date: { day: string; month: string }
  time: string
  location: string
  image: string
}

const events: EventData[] = [
  {
    title: 'Exploring the Christian Faith',
    date: { day: '18', month: 'mar' },
    time: '08:00 AM - 11:00 AM',
    location: '1195 Lobortis Rd, New Orleans, New Hampshire',
    image: 'https://picsum.photos/seed/gracecraft-event1/400/250',
  },
  {
    title: 'To Love and to Cherish, The Wedding',
    date: { day: '22', month: 'apr' },
    time: '08:00 AM - 11:00 AM',
    location: '1195 Lobortis Rd, New Orleans, New Hampshire',
    image: 'https://picsum.photos/seed/gracecraft-event2/400/250',
  },
  {
    title: 'The Christian Community in America',
    date: { day: '05', month: 'may' },
    time: '08:00 AM - 11:00 AM',
    location: '1195 Lobortis Rd, New Orleans, New Hampshire',
    image: 'https://picsum.photos/seed/gracecraft-event3/400/250',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-ink">Upcoming events</h2>
          <p className="mt-3 text-mist">Experience God's Presence</p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {events.map((evt) => (
            <div key={evt.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={evt.image}
                alt={evt.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="flex items-start gap-4 p-4">
                <div className="flex shrink-0 flex-col items-center justify-center bg-brand px-4 py-3 text-white">
                  <span className="text-2xl font-bold leading-none">{evt.date.day}</span>
                  <span className="mt-1 text-xs uppercase">{evt.date.month}</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink">
                    <a href="#" className="hover:text-brand">
                      {evt.title}
                    </a>
                  </h3>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-mist">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand" aria-hidden="true" />
                      {evt.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                      {evt.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
