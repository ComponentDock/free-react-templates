import { Phone } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="bg-brand py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <h2 className="mb-4 text-3xl font-bold uppercase text-white">
          Need Help? Get a Free Quote!
        </h2>
        <p className="mb-8 text-white/80">
          Our logistics experts are ready to help you find the best shipping solution for your
          business.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded bg-dark px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-dark/90"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Contact Us Now
        </a>
      </div>
    </section>
  )
}
