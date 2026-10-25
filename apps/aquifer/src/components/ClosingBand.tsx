import { Phone } from 'lucide-react'
import { CONTACT } from '../data'
import { Reveal } from './Reveal'

/**
 * The closing band: a flat `primary-700` surface — no gradient, no dot grid, no
 * blobs. A white solid control asks for the booking and a translucent outline
 * control dials the number.
 */
export function ClosingBand() {
  return (
    <section id="contact" className="on-brand scroll-mt-24 bg-primary-700 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meter spinning with everything off?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Shut it at the main, then call. We will locate it before anybody opens a floor.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#quote"
              className="rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Book a leak location
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
              Call {CONTACT.phoneLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
