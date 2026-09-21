import { Calendar } from 'lucide-react'

const events = [
  {
    title: 'Morning Meditation Workshop',
    date: 'March 15, 2025',
    description:
      'Start your day with clarity. Join our guided meditation session led by experienced practitioners.',
    image: 'https://picsum.photos/seed/asana-event1/600/400',
  },
  {
    title: 'Yoga Teacher Training',
    date: 'April 22, 2025',
    description:
      'Deepen your practice and learn to share yoga with others. A comprehensive 200-hour certification program.',
    image: 'https://picsum.photos/seed/asana-event2/600/400',
  },
]

export function Events() {
  return (
    <section id="events" className="py-16 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-12">Events</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div
                className="w-full sm:w-48 h-48 sm:h-auto bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url('${event.image}')` }}
              />
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{event.title}</h3>
                  <span className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar size={14} /> {event.date}
                  </span>
                  <p className="text-gray-500 text-sm">{event.description}</p>
                </div>
                <div className="mt-4">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border-2 border-brand-500 text-brand-500 text-sm font-semibold hover:bg-brand-500 hover:text-white transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
