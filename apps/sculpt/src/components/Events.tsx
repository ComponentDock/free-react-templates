import { MapPin } from 'lucide-react'
import { EVENTS } from '../data'
import { SectionHeading } from './SectionHeading'

/**
 * Events — three light-grey event cards with a right-aligned date block
 * (large orange day + month), organizer, title, and a map-pin location.
 */
export function Events() {
  return (
    <section id="events" aria-label="Upcoming events" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Upcoming Events"
          intro="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <div key={event.title} className="bg-light p-5">
              <div className="border-b border-[#e6e6e6] pb-4 text-right pr-[75px]">
                <span className="text-4xl font-bold text-brand">{event.day}</span>{' '}
                <span className="text-xl">{event.month}</span>
                <p className="mt-1 text-sm">
                  Organized by: <span className="text-ink">{event.organizer}</span>
                </p>
                <h3 className="mt-2 text-2xl leading-snug">{event.title}</h3>
              </div>
              <p className="flex items-start gap-2 pt-4 pl-[45px] text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {event.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
