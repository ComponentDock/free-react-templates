import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    date: '03 Jun 2025',
    title: 'Weekend Bible Study with believers',
    time: '8:00 pm',
    location: 'Main hall',
  },
  {
    date: '09 Jun 2025',
    title: 'Bible Study for Children',
    time: '8:00 pm',
    location: 'Main hall',
  },
  {
    date: '11 Jun 2025',
    title: 'Weekend Bible Study with believers',
    time: '8:00 pm',
    location: 'Main hall',
  },
  {
    date: '25 Jun 2025',
    title: 'Bible Study for Children',
    time: '8:00 pm',
    location: 'Main hall',
  },
] as const

const sermons = [
  {
    title: 'Walking in Grace',
    author: 'Pastor Michael Smith',
    date: '02 June, 2025',
  },
  {
    title: 'Faith Over Fear',
    author: 'Pastor Michael Smith',
    date: '26 May, 2025',
  },
  {
    title: 'The Power of Prayer',
    author: 'Pastor Michael Smith',
    date: '19 May, 2025',
  },
] as const

export function Activities() {
  return (
    <section id="ministries" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">Church Activities</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Join us for our regular activities and events designed to strengthen your faith and
            build community.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Upcoming Events */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-sm">
                  <div className="min-w-[80px] text-center">
                    <div className="text-sm font-semibold text-primary-400">{event.date}</div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#events"
              className="mt-4 inline-block text-sm font-medium text-primary-400 hover:text-primary-500"
            >
              See All Events →
            </a>
          </div>

          {/* Latest Sermons */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-gray-900">Latest Sermons</h3>
            <div className="space-y-4">
              {sermons.map((sermon, i) => (
                <div key={i} className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="font-medium text-gray-900">{sermon.title}</h4>
                  <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                    <span>{sermon.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {sermon.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#sermons"
              className="mt-4 inline-block text-sm font-medium text-primary-400 hover:text-primary-500"
            >
              See More →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
