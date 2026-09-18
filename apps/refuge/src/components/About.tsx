export function About() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            We Are Trusted Agency Company
          </h2>
        </div>
        <div className="mb-8">
          <img
            src="https://picsum.photos/seed/refuge-about/1200/500"
            alt="Our office"
            className="w-full rounded-lg object-cover"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <p className="text-mist">
            With over a decade of experience serving families and businesses, we have built our
            reputation on trust, transparency, and exceptional customer service. Our team of
            licensed professionals is dedicated to finding the right coverage for your unique needs.
          </p>
          <p className="text-mist">
            From home and auto insurance to comprehensive business coverage, we work with top-rated
            carriers to deliver policies that protect what matters most to you. Let us help you
            secure your future today.
          </p>
        </div>
      </div>
    </section>
  )
}
