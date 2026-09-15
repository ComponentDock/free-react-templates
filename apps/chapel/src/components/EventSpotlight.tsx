import { Calendar, MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { eventSpotlight } from '../data'

export function EventSpotlight() {
  return (
    <section id="events" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex gap-6">
            <div className="text-center">
              <span className="block text-4xl font-bold text-brand">{eventSpotlight.day}</span>
              <span className="text-sm font-semibold uppercase text-ink">
                {eventSpotlight.month}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">{eventSpotlight.title}</h3>
              <p className="mt-2 flex items-center gap-4 text-sm text-body">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {eventSpotlight.time}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {eventSpotlight.location}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 md:justify-end">
            <div className="flex gap-6 text-center">
              <div>
                <span className="block text-2xl font-bold text-ink">
                  {eventSpotlight.countdown.days}
                </span>
                <span className="text-xs text-body">Days</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-ink">
                  {eventSpotlight.countdown.hours}
                </span>
                <span className="text-xs text-body">hours</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-ink">
                  {eventSpotlight.countdown.mins}
                </span>
                <span className="text-xs text-body">Mins</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-ink">
                  {eventSpotlight.countdown.secs}
                </span>
                <span className="text-xs text-body">secs</span>
              </div>
            </div>
            <ButtonLink
              href="#"
              className="rounded-[2px] border-2 border-white bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[2px] text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {eventSpotlight.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
