interface Event {
  title: string
  category: string
  day: string
  month: string
  imageSeed: string
}

const events: Event[] = [
  {
    title: 'Spanish Conversation Night',
    category: 'Social',
    day: '15',
    month: 'Mar',
    imageSeed: 'lingo-event-1',
  },
  {
    title: 'Japanese Calligraphy Workshop',
    category: 'Workshop',
    day: '22',
    month: 'Mar',
    imageSeed: 'lingo-event-2',
  },
  {
    title: 'French Cinema Screening',
    category: 'Culture',
    day: '28',
    month: 'Mar',
    imageSeed: 'lingo-event-3',
  },
]

function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded shadow-sm overflow-hidden">
      <div className="relative">
        <img
          src={`https://picsum.photos/seed/${event.imageSeed}/350/200`}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-brand-primary text-white text-center rounded-[3px] px-3 py-2">
          <div className="text-xl font-bold leading-none">{event.day}</div>
          <div className="text-xs uppercase">{event.month}</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{event.title}</h3>
        <span className="text-xs text-text-muted uppercase tracking-wide">{event.category}</span>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
