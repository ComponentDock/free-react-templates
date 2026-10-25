import { Phone } from 'lucide-react'
import { EMERGENCY, PHONE_HREF, PHONE_LABEL } from '../content'

/**
 * The thin brand-green band between the timeline and the services grid: a
 * pinging dot, the backup promise, and one white phone pill.
 */
export function EmergencyBand() {
  return (
    <section id="emergency" className="bg-primary-600 text-white">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-90">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {EMERGENCY.eyebrow}
          </p>
          <p className="mt-1 text-lg font-bold lg:text-xl">{EMERGENCY.headline}</p>
          <p className="mt-2 max-w-2xl text-sm opacity-90">{EMERGENCY.body}</p>
        </div>
        <a
          href={PHONE_HREF}
          data-phone
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 transition-colors hover:bg-primary-50"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          {PHONE_LABEL}
        </a>
      </div>
    </section>
  )
}
