export function CTA() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(60,64,143,0.95), rgba(91,97,207,0.95)), url(https://picsum.photos/seed/bytecraft-cta/1920/400)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">Not Yet Convinced With Our Quality?</h2>
        <p className="mb-8 text-lg text-gray-200">
          Let us show you what we can do for your business.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full border border-brand px-8 py-3 text-sm font-medium text-white transition hover:bg-brand hover:text-dark"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
