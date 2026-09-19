import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    image: 'https://picsum.photos/seed/precept-event1/400/250',
    title: 'Summer Art Workshop',
    date: '12 Jan 2026',
    time: '12:00 AM - 12:30 PM',
    venue: '2nd Floor, Main Hall',
  },
  {
    image: 'https://picsum.photos/seed/precept-event2/400/250',
    title: 'Web Dev Bootcamp',
    date: '18 Mar 2026',
    time: '09:00 AM - 05:00 PM',
    venue: 'Online (Zoom)',
  },
  {
    image: 'https://picsum.photos/seed/precept-event3/400/250',
    title: 'Photography Basics',
    date: '25 May 2026',
    time: '10:00 AM - 02:00 PM',
    venue: 'Creative Studio',
  },
]

export function UpcomingEvents() {
  return (
    <section id="events" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-heading mb-2">Upcoming Events</h1>
          <p className="text-body">Do you want to share your knowledge with the world?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h4 className="text-base font-semibold text-heading mb-2">{event.title}</h4>
                <div className="flex items-center gap-2 text-sm text-body mb-1">
                  <Calendar className="w-4 h-4 text-brand" />
                  {event.date} — {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-body">
                  <MapPin className="w-4 h-4 text-brand" />
                  {event.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
