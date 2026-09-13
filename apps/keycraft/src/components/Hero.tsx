export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/keycraft-hero/1920/1080)',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary-400">
          Best locksmith
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
          We Provide Best Locksmith Services All Over World
        </h1>
        <a
          href="#contact"
          className="mt-8 inline-block rounded bg-primary-400 px-8 py-3 font-semibold text-navy transition-colors hover:bg-primary-500"
        >
          Contact us
        </a>
      </div>
    </section>
  )
}
