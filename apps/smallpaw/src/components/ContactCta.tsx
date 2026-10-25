import { Phone } from 'lucide-react'
import { CONTACT } from '../data'

const DOT_GRID = {
  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
  backgroundSize: '40px 40px',
}

/**
 * The closing band: a diagonal plum gradient over a 40 px dot grid at 10 %
 * opacity, with two blurred blobs and a white solid CTA beside a ghost one.
 */
export function ContactCta() {
  return (
    <section
      id="contact"
      className="on-gradient relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={DOT_GRID} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Register before you need us
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-100">
          Registration takes five minutes and means we already have your pet&apos;s history when
          something goes wrong.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg transition-colors hover:bg-primary-50"
          >
            Register your pet
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white/60"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            {CONTACT.phoneLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
