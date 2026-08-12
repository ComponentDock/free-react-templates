export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-banner-heading"
      className="bg-gradient-to-br from-brand to-navy-dark px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-banner-heading"
          className="mb-5 font-display text-3xl font-bold text-white sm:text-4xl"
        >
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto mb-9 max-w-xl text-sm leading-relaxed text-gray-200">
          Book a free consultation and get a clear, honest read on your biggest growth opportunities
          — no strings attached.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex rounded bg-white px-9 py-4 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand-deep hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get Free Consultation
          </a>
          <a
            href="#services"
            className="inline-flex rounded border-2 border-white bg-transparent px-9 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
