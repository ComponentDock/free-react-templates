import { Phone } from 'lucide-react'

/** CTA banner — dark parallax with question + buttons. */
export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/advocat-cta/1920/600)' }}
    >
      <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Are You Facing Criminal Charges?
        </h2>
        <p className="mt-3 text-white/70">We are waiting for your call</p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-ink px-8 py-4 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-ink/80"
          >
            <Phone className="h-4 w-4" /> Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
