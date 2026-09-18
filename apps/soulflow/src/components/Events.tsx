const events = [
  {
    title: 'Summer Yoga Retreat',
    date: 'Aug 15, 2026',
    description: 'A weekend of intensive yoga practice and meditation in nature.',
    image: 'https://picsum.photos/seed/soulflow-ev1/400/300',
  },
  {
    title: 'Mindfulness Workshop',
    date: 'Sep 5, 2026',
    description: 'Learn practical mindfulness techniques for daily life.',
    image: 'https://picsum.photos/seed/soulflow-ev2/400/300',
  },
  {
    title: 'Yoga for Beginners',
    date: 'Sep 20, 2026',
    description: 'Start your yoga journey with our beginner-friendly program.',
    image: 'https://picsum.photos/seed/soulflow-ev3/400/300',
  },
]

export function Events() {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Upcoming Events
          </h2>
        </div>
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-sm"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-48 h-32 object-cover rounded-lg shrink-0"
              />
              <div>
                <p className="text-soulflow-teal text-sm mb-1">{event.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
