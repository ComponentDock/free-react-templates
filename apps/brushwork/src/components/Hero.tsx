export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink lg:min-h-screen"
    >
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/brushwork-hero/1600/900"
          alt="Art and crafting workspace"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Crafting Best Experience
          </h1>
          <p className="mt-6 flex items-center gap-4 text-sm uppercase tracking-[0.25em] text-white/80">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            Art and Crafting / Acting and Philosophy
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  )
}
