import { CalendarDays, Clock, Mail } from 'lucide-react'
import { venueInfo } from '../data'

export function Venue() {
  return (
    <section id="venue" className="bg-footer py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-md bg-white shadow-lg lg:grid-cols-2">
          <div className="p-10 md:p-12">
            <h3 className="font-display text-2xl font-bold text-heading md:text-3xl">
              {venueInfo.city}
            </h3>
            <p className="mt-2 text-muted">{venueInfo.address}</p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-muted">
                <CalendarDays className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {venueInfo.days}
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Clock className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {venueInfo.dates}
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                {venueInfo.email}
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted">{venueInfo.note}</p>
          </div>
          <iframe
            title="Rally event venue map"
            src="https://maps.google.com/maps?q=Santa%20Monica%20Boulevard%2C%20Los%20Angeles%2C%20CA&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            className="h-[320px] w-full border-0 lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
