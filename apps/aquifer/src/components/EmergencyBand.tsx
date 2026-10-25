import { Phone } from 'lucide-react'
import { CONTACT } from '../data'

/**
 * The thin emergency band — not a `.section`. A pinging dot, the case stated in
 * one line, the shut-off advice and a white phone pill on the right from `lg`.
 * The ping is the page's only looping animation and stops under reduced motion
 * (`motion-safe`).
 */
export function EmergencyBand() {
  return (
    <section id="emergency" data-testid="emergency-band" className="bg-primary-600 text-white">
      <div className="container mx-auto flex flex-col items-start gap-4 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase opacity-90">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Water running with everything off?
          </p>
          <p className="mt-1 text-lg font-bold lg:text-xl">
            Same-day location when the meter is spinning and you cannot find it.
          </p>
          <p className="mt-2 max-w-2xl text-sm opacity-90">
            Shut the main off first, then call. If the meter still moves with the main closed, the
            loss is on the supply side, and finding it today is cheaper than finding it in three
            weeks.
          </p>
        </div>

        <a
          href={CONTACT.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 transition-colors hover:bg-primary-50"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          {CONTACT.phoneLabel}
        </a>
      </div>
    </section>
  )
}
