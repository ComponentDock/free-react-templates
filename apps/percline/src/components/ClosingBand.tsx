import { Phone } from 'lucide-react'
import { CLOSING, PHONE_HREF } from '../content'
import { Reveal } from './Reveal'

/** Flat brand-green closing band: one white button, one ghost phone button. */
export function ClosingBand() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28">
      <Reveal className="container mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{CLOSING.heading}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-100">{CLOSING.lede}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex w-full items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 transition-colors hover:bg-primary-50 sm:w-auto"
          >
            {CLOSING.primary}
          </a>
          <a
            href={PHONE_HREF}
            data-phone
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {CLOSING.secondary}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
