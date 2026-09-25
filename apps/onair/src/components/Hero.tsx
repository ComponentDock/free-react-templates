export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/onair-hero/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="text-4xl font-bold uppercase tracking-wide text-white md:text-5xl">
          Designed For Music, Engineered to Last
        </h1>
        <p className="mt-4 text-lg text-white/80">
          31st Dec — Night out party... Don&apos;t miss it
        </p>
        <a
          href="#charts"
          className="mt-8 inline-block rounded bg-brand px-8 py-3 font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Book Now
        </a>
      </div>
    </section>
  )
}
