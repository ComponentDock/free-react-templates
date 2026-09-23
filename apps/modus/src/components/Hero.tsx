export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink dark:bg-ink-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/modus-hero/1600/900"
          alt="Modern interior design living room"
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl text-white">
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's Make your Interior Better
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Even the all-powerful Pointing has no control about the blind texts it is an almost
              unorthographic.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block rounded bg-brand px-8 py-3.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Explore Our Services
            </a>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/modus-hero2/800/600"
              alt="Interior design showcase"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
