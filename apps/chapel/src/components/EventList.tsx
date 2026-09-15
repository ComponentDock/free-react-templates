import { Calendar, MapPin, User } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { events } from '../data'

export function EventList() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="block font-display text-lg font-bold italic text-brand">
              Experience God&apos;s Presence
            </span>
            <h2 className="mt-2 text-4xl font-bold uppercase text-ink">Upcoming Events</h2>
          </div>
          <ButtonLink
            href="#"
            className="hidden rounded-[2px] bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:inline-block"
          >
            view all events
          </ButtonLink>
        </div>
        <div className="space-y-8">
          {events.map((ev) => (
            <div key={ev.title} className="grid gap-6 md:grid-cols-[1fr_2fr]">
              <img src={ev.image} alt={ev.title} className="w-full rounded object-cover" />
              <div>
                <div className="mb-4 flex items-start gap-4">
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-brand">{ev.day}</span>
                    <span className="text-xs font-semibold uppercase text-ink">{ev.month}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{ev.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-body">
                      <span className="inline-flex items-center gap-1">
                        <User className="h-4 w-4" aria-hidden="true" />
                        {ev.author}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {ev.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {ev.location}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-body">{ev.description}</p>
                <ButtonLink
                  href="#"
                  className="mt-4 inline-block rounded-[2px] border-2 border-brand bg-transparent px-6 py-2.5 text-xs font-bold uppercase tracking-[1px] text-brand transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  {ev.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
