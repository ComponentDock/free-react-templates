import { Building2, Calendar, MapPin } from 'lucide-react'
import { events, sectionLabels } from '../data'
import { SectionHeading } from './SectionHeading'

export function Events() {
  return (
    <section id="events" className="bg-section-bg py-20">
      <div className="mx-auto max-w-[1250px] px-4">
        <SectionHeading label={sectionLabels.events} heading={sectionLabels.eventsHeading} />
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="overflow-hidden bg-white">
              <img
                src={event.image}
                alt=""
                aria-hidden="true"
                className="h-[200px] w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3 font-heading text-2xl font-medium text-black">
                  <a href="#" className="transition-colors hover:text-brand">
                    {event.title}
                  </a>
                </h3>
                <ul className="mb-4 space-y-1 text-sm text-body">
                  <li className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {event.time}
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {event.venue}
                  </li>
                  <li className="flex items-start gap-2">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {event.address}
                  </li>
                </ul>
                <a
                  href="#events"
                  className="inline-block rounded-[3px] border border-brand bg-brand px-5 py-3 text-sm text-white transition-colors hover:bg-transparent hover:text-brand"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
