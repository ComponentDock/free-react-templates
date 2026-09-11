export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/shoplane-hero/1920/600)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/80">
          Spring / Summer Collection 2025
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Get up to 30% Off
          <br />
          New Arrivals
        </h1>
        <a
          href="#shop"
          className="inline-block rounded bg-coral-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-coral-400"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
