export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
            Building Networks <span className="text-primary-600">For People</span>
          </h1>
          <p className="mt-5 max-w-xl font-accent text-xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <a
            href="#features"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-primary-600 px-11 py-3.5 font-accent text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-700"
          >
            Try for free
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/ecobit-hero/640/720"
          alt="Ecobit app dashboard preview"
          className="mx-auto w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </section>
  )
}
