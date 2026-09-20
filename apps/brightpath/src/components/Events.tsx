import { Calendar } from 'lucide-react'

const events = [
  {
    title: "The Universe Through A Child's Eyes",
    date: '25th February, 2025',
    description:
      'An interactive workshop designed to spark curiosity in young minds about astronomy and space exploration.',
    image: 'https://picsum.photos/seed/brightpath-event1/600/400',
  },
  {
    title: 'Future of Online Learning',
    date: '15th March, 2025',
    description:
      'Explore emerging trends in digital education and how technology is reshaping the way we learn.',
    image: 'https://picsum.photos/seed/brightpath-event2/600/400',
  },
]

export function Events() {
  return (
    <section className="py-24 bg-gray-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-heading mb-4">Upcoming Events</h2>
          <p className="text-body max-w-xl mx-auto">
            Join our exciting events and workshops. Network with fellow learners and gain insights
            from industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-3/5 p-6">
                  <div className="flex items-center gap-2 text-brand text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <h4 className="text-lg font-semibold text-heading mb-3 hover:text-brand transition-colors cursor-pointer">
                    {event.title}
                  </h4>
                  <p className="text-sm text-body leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
