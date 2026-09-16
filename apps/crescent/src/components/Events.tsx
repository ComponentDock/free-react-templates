import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react'

const EVENTS = [
  {
    title: 'Seeing and Savoring Jesus Christ',
    date: 'March 01, 2025',
    time: '09:00 - 11:00',
    location: '11 Rose St, Brooklyn, NY',
    description:
      'Join us for an informational gathering about our community outreach programs and initiatives.',
    image: 'https://picsum.photos/seed/crescent-event1/400/300',
  },
  {
    title: 'A God-Entranced Vision of All Things',
    date: 'March 15, 2025',
    time: '11:00 - 13:00',
    location: '22 Main St, Manhattan, NY',
    description:
      'A special session exploring the intersection of faith and daily life in our modern world.',
    image: 'https://picsum.photos/seed/crescent-event2/400/300',
  },
  {
    title: 'Speaker Interviews with J. Doe',
    date: 'March 19, 2025',
    time: '09:00 - 17:00',
    location: '17 Broadway, Center City, NY',
    description:
      'An interactive workshop on building stronger families and communities through faith.',
    image: 'https://picsum.photos/seed/crescent-event3/400/300',
  },
]

export function Events() {
  return (
    <section className="bg-light-bg py-20 md:py-24" id="events" data-testid="events">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Parallax heading area */}
        <div
          className="relative mb-12 rounded-sm py-12"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/crescent-events-heading/1920/400)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 px-4">
            <h2 className="text-left text-2xl font-bold uppercase text-white md:text-3xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Be sure to visit our Upcoming Events page regularly to get information.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {EVENTS.map((event) => (
            <div
              key={event.title}
              className="flex flex-col items-stretch gap-0 bg-white md:flex-row"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover md:h-auto md:w-64"
                loading="lazy"
              />
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-brand-dark">{event.title}</h4>
                  <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-text">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-brand" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-brand" /> {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand" /> {event.location}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-body-text">{event.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark transition-colors hover:text-brand"
                  >
                    Read More <ChevronRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[3px] border-2 border-brand bg-transparent px-5 py-2 text-xs font-bold uppercase text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    Find Out More
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
