import { Clock, MapPin } from 'lucide-react'
import { EVENTS } from '../data'

/* Events (source: div.events_area — navy #002347 background, "Upcoming
   Events" white title, two cards; each thumb carries an absolute overlay
   panel on the right (rgba(0,35,71,.5), 275px) with date, time, location,
   blurb and a square-cornered gold "View Details" button). */
export function Events() {
  return (
    <section id="events" className="bg-primary py-[100px]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mx-auto mb-16 max-w-[540px] text-center">
          <h2 className="font-heading text-[36px] font-bold text-white">Upcoming Events</h2>
          <p className="mt-4 text-[16px] leading-[25px] text-white/70">
            Replenish man have thing gathering lights yielding shall you.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {EVENTS.map((event) => (
            <article key={event.id} className="relative">
              <img
                src={event.image}
                alt=""
                loading="lazy"
                className="h-[330px] w-full object-cover"
              />
              <div className="absolute inset-y-0 right-0 w-full bg-[rgba(0,35,71,0.5)] p-7 sm:w-[275px]">
                <div className="flex items-start gap-4">
                  <div className="text-center">
                    <p className="font-heading text-[36px] font-medium leading-none text-accent">
                      {event.day}
                    </p>
                    <span className="text-[14px] uppercase text-white">{event.month}</span>
                  </div>
                  <div className="space-y-2 text-[14px] text-white/90">
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {event.location}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-[22px] text-white/85">{event.blurb}</p>
                <a
                  href="#events"
                  className="mt-5 inline-block rounded-none bg-accent px-8 text-[13px] font-medium uppercase leading-[48px] text-primary transition-colors hover:bg-primary hover:text-accent"
                >
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
