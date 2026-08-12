import { EVENTS } from '../data'

/* .event-area — "Upcoming Events" with three #f9f9ff cards: the date
   ("12th September, 2018") and the serif title link (green on hover). */
export function EventsSection() {
  return (
    <section id="events" className="bg-white pb-[150px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="pb-[95px] text-center">
          <h2 className="font-display text-4xl font-semibold text-ink">Upcoming Events</h2>
          <p className="mx-auto mt-4 max-w-xl leading-[1.625] text-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid gap-7 md:grid-cols-3">
          {EVENTS.map((event, index) => (
            <article key={index} className="mt-[45px] bg-light p-8">
              <p className="text-[13px] font-medium uppercase tracking-wide text-body">
                {event.date}
              </p>
              <h4 className="mt-3 font-display text-[21px] font-semibold leading-snug text-ink">
                <a href="#donation" className="transition-colors hover:text-accent">
                  {event.title}
                </a>
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
