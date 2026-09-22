export function Welcome() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row">
        <div className="relative flex-1">
          <div
            className="h-80 w-full rounded bg-cover bg-center lg:h-96"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/lodgely-about/800/600)' }}
          />
          <div
            className="absolute -bottom-6 -right-6 h-48 w-48 rounded bg-cover bg-center shadow-lg sm:-right-10 sm:h-56 sm:w-56"
            style={{ backgroundImage: 'url(https://picsum.photos/seed/lodgely-food/400/400)' }}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-4xl font-bold text-ink lg:text-5xl">Welcome!</h2>
          <p className="mt-6 text-base leading-relaxed text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#rooms"
              className="rounded-full bg-primary-400 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-primary-500"
            >
              Learn More
            </a>
            <span className="font-display italic text-body">or</span>
            <a
              href="#"
              className="text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:text-primary-400"
            >
              See video
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
