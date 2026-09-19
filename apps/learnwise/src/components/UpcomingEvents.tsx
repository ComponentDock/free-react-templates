import { Clock } from 'lucide-react'

const events = [
  {
    title: 'Networking Day',
    date: 'August 26',
    time: 'August 26 @ 9:00 am',
    fee: '$45',
    image: 'https://picsum.photos/seed/learnwise-event1/400/300',
  },
  {
    title: 'Open Doors Day',
    date: 'August 7',
    time: 'August 7 @ 9:00 am',
    fee: 'Free',
    image: 'https://picsum.photos/seed/learnwise-event2/400/300',
  },
  {
    title: 'Creative Leadership',
    date: 'August 3',
    time: 'August 3 @ 9:00 am',
    fee: '$45',
    image: 'https://picsum.photos/seed/learnwise-event3/400/300',
  },
]

export function UpcomingEvents() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="mb-12 text-center font-heading text-3xl font-bold text-gray-800">
          Upcoming events
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {e.date}
                </span>
                <h4 className="absolute bottom-3 left-3 text-lg font-bold text-white drop-shadow-md">
                  {e.title}
                </h4>
              </div>
              <div className="flex items-center justify-between px-5 py-3">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" /> {e.time}
                </span>
                <a
                  href="#"
                  className={`rounded px-4 py-1 text-xs font-semibold ${
                    e.fee === 'Free'
                      ? 'bg-primary text-white'
                      : 'border border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                  }`}
                >
                  {e.fee}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
