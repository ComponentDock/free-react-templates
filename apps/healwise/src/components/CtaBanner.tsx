export function CtaBanner() {
  return (
    <section className="bg-ink py-16" data-testid="cta-banner">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          We Provide Free Health Care Consultation
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-white/70">
          Book a free consultation with our expert doctors and get the best advice for your health
          concerns.
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
