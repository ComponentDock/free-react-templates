export function CallToAction() {
  return (
    <section className="relative bg-brand-600 py-20">
      <div className="absolute inset-0 bg-brand-700/60" />
      <div className="relative mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-white">Got impressed by our features</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Start your free trial today and discover why thousands of startups choose Launchpad to
          power their growth.
        </p>
        <a
          href="#price"
          className="mt-8 inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-brand-600 shadow transition hover:bg-gray-100"
        >
          Request Free Demo
        </a>
      </div>
    </section>
  )
}
