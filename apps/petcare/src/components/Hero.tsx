export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl dark:text-white">
            We Care Your Pets.
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-muted dark:text-gray-400">
            Your pets deserve the very best care — comfortable boarding, gentle treatment, and
            complete peace of mind while you are away.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-600"
            >
              Contact Now
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/petcare-hero/640/520"
            alt=""
            className="mx-auto w-full max-w-md rounded-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
