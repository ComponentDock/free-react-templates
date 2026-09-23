export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,4,16,0.55), rgba(0,4,16,0.55)), url(https://picsum.photos/seed/drifter-hero/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-32">
        <p className="font-heading text-sm uppercase tracking-widest text-white/70">This is me</p>
        <h1 className="mt-2 font-heading text-5xl font-bold text-white md:text-6xl">Alex Morgan</h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          A multidisciplinary designer crafting digital experiences that blend creativity with
          purpose. Passionate about architecture, interiors, and the stories spaces tell.
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-heading px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-purple"
        >
          Discover Now
        </a>
      </div>
    </section>
  )
}
