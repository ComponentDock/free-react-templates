export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-20 sm:px-6 md:flex-row md:py-28">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            We Care For <span className="block">Your Dog</span>
          </h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-gray-500 dark:text-gray-400">
            We always try to provide your dog the best <span className="block">services.</span>
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/dogger-hero/640/520"
            alt=""
            className="mx-auto w-full max-w-md"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
