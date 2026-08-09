import { Phone } from 'lucide-react'
import { Reveal } from './Reveal'

export function CtaBand() {
  return (
    <section className="bg-primary-900">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready for a Spotless Space?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-primary-100/90">
            Book your cleaning today and experience the Gleam difference. First-time customers get
            20% off their initial cleaning.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#quote"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-800 transition-colors hover:bg-primary-50"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+15558675309"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
