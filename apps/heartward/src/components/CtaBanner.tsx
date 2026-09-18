export function CtaBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/heartward-cta/1400/400)' }}
    >
      <div className="absolute inset-0 bg-dark/70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 font-heading text-4xl font-bold text-white md:text-5xl">
          Volunteer Needed At Your Area
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Join thousands of volunteers making a real difference in their communities. Your time and
          skills can transform lives.
        </p>
        <a
          href="#events"
          className="inline-block rounded bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}
