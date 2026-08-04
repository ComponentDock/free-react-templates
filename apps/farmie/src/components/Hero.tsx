export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-5xl dark:text-white">
            The hearth of the farm is the true center of our universe.
          </h2>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-gray-500 dark:text-gray-400">
            Fresh organic produce grown with care, delivered from our farm straight to your table.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#products"
              className="inline-block rounded-full bg-brand px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              Shop Now
            </a>
            <a
              href="#about"
              className="inline-block rounded-full border border-brand px-10 py-4 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/farmie-hero/640/520"
            alt=""
            className="mx-auto w-full max-w-md rounded-lg"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
