import { Phone, Mail } from 'lucide-react'

/** Newsletter / CTA section — dark parallax with contact buttons. */
export function NewsletterCta() {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/advocat-newsletter/1920/600)' }}
    >
      <div className="absolute inset-0 bg-ink/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Need Legal Adviser?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-ink px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-ink/80"
          >
            <Phone className="h-4 w-4" /> 0-1230-456-7890
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            <Mail className="h-4 w-4" /> youremail@email.com
          </a>
        </div>
      </div>
    </section>
  )
}
