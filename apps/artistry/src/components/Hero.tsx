export function Hero() {
  return (
    <section id="home" className="bg-dark-brown">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 text-white">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi there, I am <span className="text-brand">Artistry</span>
            </h1>
            <p className="mt-4 text-lg font-medium uppercase tracking-widest text-brand">
              Creative Director
            </p>
            <a
              href="#works"
              className="mt-8 inline-block rounded-none border border-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View Works
            </a>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/seed/artistry-portrait/500/600"
              alt="Artistry portrait"
              className="h-[400px] w-[320px] object-cover lg:h-[500px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
