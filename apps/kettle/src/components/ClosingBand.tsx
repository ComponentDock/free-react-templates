import { Phone } from 'lucide-react'
import { BRAND } from '../data'

/**
 * The closing band is a flat brand ground with two buttons and nothing else —
 * no gradient, no dot grid, no image. By this point the page has made the
 * argument, so the only thing left is the two ways to act on it.
 */
export function ClosingBand() {
  return (
    <section id="contact" className="on-brand bg-primary-700 py-20 lg:py-28" aria-labelledby="contact-title">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="contact-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Not sure what size you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-100">
            Four questions on this page and you will have both answers, tank and tankless.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#size"
              className="rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              Size mine
            </a>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
