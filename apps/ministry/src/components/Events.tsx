import { Calendar, MapPin, Building } from 'lucide-react'

const events = [
  {
    image: 'https://picsum.photos/seed/ministry-event1/600/300',
    title: 'Giving Hope to Our Spiritual Needs',
    date: 'Monday, 8:00 Am - Tuesday, 8:00 Pm',
    location: 'Ministry Church',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    image: 'https://picsum.photos/seed/ministry-event2/600/300',
    title: 'Community Prayer and Worship Night',
    date: 'Wednesday, 6:00 Pm - 9:00 Pm',
    location: 'Ministry Church',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
  {
    image: 'https://picsum.photos/seed/ministry-event3/600/300',
    title: 'Youth Conference 2029',
    date: 'Saturday, 9:00 Am - 5:00 Pm',
    location: 'Ministry Church',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
  },
]

export function Events() {
  return (
    <section id="events" className="py-16">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-brand text-sm font-medium uppercase tracking-wider">Events</span>
          <h2 className="text-3xl font-normal mt-2">Latest Events</h2>
        </div>

        <div className="space-y-6">
          {events.map((event) => (
            <div key={event.title} className="flex flex-col md:flex-row overflow-hidden rounded">
              <div className="md:w-1/3">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6 md:px-10 md:py-6 flex items-center">
                <div>
                  <h3 className="text-xl font-normal mb-3">
                    <a href="#" className="text-heading hover:text-brand transition-colors">
                      {event.title}
                    </a>
                  </h3>
                  <div className="text-sm text-body-text space-y-1 mb-4">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <a href="#" className="text-brand hover:underline">
                        {event.location}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <Building className="w-4 h-4 shrink-0" aria-hidden="true" />
                      {event.address}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-brand text-white px-5 py-2 rounded text-sm hover:bg-brand-hover transition-colors"
                  >
                    More Details
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
