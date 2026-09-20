import { Clock, Calendar, MapPin } from 'lucide-react'

const events = [
  {
    day: '02',
    month: 'Dec, 2024',
    title: 'How to Speak Like a Native Speaker?',
    time: '10:30 PM',
    date: '21 Nov 2024',
    location: 'AH Auditorium',
  },
  {
    day: '03',
    month: 'Dec, 2024',
    title: 'International Education Summit 2024',
    time: '09:00 AM',
    date: '03 Dec 2024',
    location: 'Main Hall',
  },
  {
    day: '10',
    month: 'Dec, 2024',
    title: 'Career Guidance Workshop',
    time: '02:00 PM',
    date: '10 Dec 2024',
    location: 'Room 204',
  },
]

export function Events() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-navy-800 mb-4">Recent Events</h2>
        <p className="text-center text-navy-500 mb-12 max-w-2xl mx-auto">
          Stay up to date with our latest campus events, workshops, and academic gatherings.
        </p>

        <div className="space-y-6">
          {events.map((evt, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-center flex-shrink-0 w-20">
                <span className="text-3xl font-bold text-brand-400">{evt.day}</span>
                <p className="text-xs text-navy-500 mt-1">{evt.month}</p>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-navy-800 mb-2">{evt.title}</h4>
                <div className="flex flex-wrap gap-4 text-sm text-navy-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {evt.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {evt.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {evt.location}
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
