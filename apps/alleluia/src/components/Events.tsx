import { Clock, MapPin } from 'lucide-react'

const events = [
  {
    day: '15',
    month: 'Sep',
    title: 'Sunday Worship Service',
    description:
      'Join us for our weekly worship service with music, prayer, and a message of hope.',
    time: '10:00 AM',
    location: 'Main Sanctuary',
  },
  {
    day: '18',
    month: 'Sep',
    title: 'Bible Study Night',
    description: 'Dive deeper into the Word with our midweek Bible study group.',
    time: '7:00 PM',
    location: 'Fellowship Hall',
  },
  {
    day: '22',
    month: 'Sep',
    title: 'Community Outreach',
    description: 'Serve our neighbors through food distribution and fellowship.',
    time: '9:00 AM',
    location: 'Community Center',
  },
]

export function Events() {
  return (
    <section id="events" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="font-oldstandard text-4xl font-bold text-text-primary text-center mb-12">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-brand text-white p-4 text-center">
                <span className="text-3xl font-bold block">{event.day}</span>
                <span className="text-sm uppercase">{event.month}</span>
              </div>
              <div className="p-6">
                <h3 className="font-oldstandard text-xl font-bold text-text-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">{event.description}</p>
                <div className="flex flex-col gap-2 text-sm text-text-secondary">
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-brand" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-brand" />
                    {event.location}
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
