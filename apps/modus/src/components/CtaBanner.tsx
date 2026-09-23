import { Phone } from 'lucide-react'

export function CtaBanner() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/modus-cta/1600/500"
          alt="Interior design background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-lg bg-brand px-8 py-12 text-center shadow-lg sm:px-12 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Let's discuss about your interior
          </h2>
          <p className="mt-4 text-base text-white/80">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-block rounded bg-white px-8 py-3.5 font-display text-sm font-medium text-ink transition-colors hover:bg-salmon"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded border border-white/60 px-6 py-3 font-display text-sm font-medium text-white transition-colors hover:bg-white hover:text-ink"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +10 (87) 267 2467
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
