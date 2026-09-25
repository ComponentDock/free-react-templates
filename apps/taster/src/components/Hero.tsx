export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/taster-hero/1600/900)',
      }}
    >
      <div className="px-4 text-center">
        <h1 className="mb-8 font-display text-5xl font-bold text-white md:text-6xl">
          Welcome to Taster
        </h1>
        <a
          href="#reservation"
          className="inline-block rounded-sm border-2 border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-ink"
        >
          Reserve A Table
        </a>
      </div>
    </section>
  )
}
