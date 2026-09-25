export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-hero-bg"
    >
      <img
        src="https://picsum.photos/seed/stave-hero/1200/600"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-5xl font-bold uppercase tracking-widest text-white sm:text-7xl">
          Musician
        </h1>
      </div>
    </section>
  )
}
