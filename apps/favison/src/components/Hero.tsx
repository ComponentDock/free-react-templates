export function Hero() {
  return (
    <section id="home" className="overflow-hidden bg-paper dark:bg-gray-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl dark:text-white">
            Build a better business <span className="text-primary-600">&amp; faster</span>
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <a
            href="#pricing"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-primary-600 px-10 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Begin Free Trial
          </a>
        </div>
        <img
          src="https://picsum.photos/seed/favison-hero/640/560"
          alt="Favison dashboard preview"
          className="mx-auto w-full max-w-md rounded-xl shadow-xl"
        />
      </div>
    </section>
  )
}
