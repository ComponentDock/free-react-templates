export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy dark:bg-navy-deep">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/forgepoint-hero/1600/900"
          alt="Industrial manufacturing facility"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-bold leading-tight text-white sm:text-6xl">
            Industrial Solutions!
          </h1>
          <p className="mt-6 text-lg text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </p>
          <a
            href="#services"
            className="relative mt-8 inline-block bg-navy px-8 py-5 font-display text-xl font-medium text-white shadow-[-8px_8px_0_#ca611b] transition-all hover:shadow-[8px_8px_0_#ca611b]"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
