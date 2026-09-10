export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/veloce-hero/1600/600)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          <span className="block text-lg font-normal uppercase tracking-widest text-white/80">
            Welcome To
          </span>
          Veloce Garage
        </h1>
        <p className="mt-4 max-w-lg text-base text-white/80">
          Professional automotive services you can trust. Engine overhauls, diagnostics, upgrades,
          and more — delivered with 20 years of expertise.
        </p>
        <a
          href="#services"
          className="mt-8 inline-block rounded-sm bg-primary-400 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-500"
        >
          Our Services
        </a>
      </div>
    </section>
  )
}
