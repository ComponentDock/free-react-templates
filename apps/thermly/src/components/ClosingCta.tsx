import { Phone } from 'lucide-react'
import { brand } from '../data'

/** Full-bleed teal call-out: white solid CTA plus a white outline phone link. */
export function ClosingCta() {
  return (
    <section id="contact" className="scroll-mt-24 bg-primary-700 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Warm rooms in July, cold ones in January?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-100">
            Pick a window and a technician will be there inside it.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 transition-colors hover:bg-primary-50 sm:w-auto"
            >
              Book a visit
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call {brand.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
