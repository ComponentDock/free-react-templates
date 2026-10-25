import { Phone } from 'lucide-react'
import { BRAND } from '../data'

/**
 * A thin orange band, not a section: the leaking-tank case is the one visitor
 * who will not read the page, so it gets a status line, one paragraph and a
 * number. The pinging dot is the only looping animation on the page.
 */
export function EmergencyBand() {
  return (
    <section id="emergency" className="on-brand bg-primary-600 text-white" aria-labelledby="emergency-title">
      <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-bold tracking-wide uppercase">
              <span aria-hidden="true" className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              No hot water, or a leaking tank?
            </p>
            <h2 id="emergency-title" className="mt-1 text-lg font-bold text-white lg:text-xl">
              A leaking tank is a same-day call. We carry the common sizes on the truck.
            </h2>
            <p className="mt-2 max-w-2xl text-sm opacity-90">
              If water is coming from the tank itself rather than a fitting, it is not repairable and
              any company telling you otherwise is selling you a visit. Shut off the supply and call.
            </p>
          </div>
          <a
            href={BRAND.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 transition-colors hover:bg-primary-50"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            {BRAND.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
