export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/eddy-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center">
        <h1 className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl">
          Beach Resort
        </h1>
        <p className="mt-4 text-lg text-white/90 sm:text-xl">Relax, Unwind, and Enjoy</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#about"
            className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-400"
          >
            EXPLORE NOW
          </a>
          <a
            href="#rooms"
            className="rounded border-2 border-white bg-transparent px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            SEE ROOMS
          </a>
        </div>
      </div>
    </section>
  )
}
