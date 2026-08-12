import { Clock, MapPin } from 'lucide-react'
import { events } from '../data'

export function LatestEvent() {
  return (
    <section aria-label="Latest event" className="site-section py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-script text-4xl text-ink md:text-5xl">Latest Event</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map((event, i) => (
            <article key={`${event.title}-${i}`} className="event-29191">
              <img src={event.img} alt={event.alt} className="h-64 w-full rounded object-cover" />
              <div className="mt-4 flex gap-5">
                <div className="flex h-auto w-24 flex-none flex-col items-center justify-center bg-primary p-3 text-center">
                  <span className="text-3xl font-bold text-white">{event.day}</span>
                  <span className="text-sm text-white">{event.month}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-light text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                      {event.place}
                    </span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-ink">
                    <a href="#event" className="transition-colors hover:text-primary">
                      {event.title}
                    </a>
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
