export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/tastory-hero/1920/1080')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-4 font-heading text-5xl font-bold text-white md:text-7xl">
          Welcome To Tastory
        </h1>
        <p className="mb-8 text-lg font-light text-white/70">
          Come and eat well with our delicious &amp; healthy foods.
        </p>
        <a
          href="#contact"
          className="inline-block border border-white px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
        >
          Reservation
        </a>
      </div>
    </section>
  )
}
