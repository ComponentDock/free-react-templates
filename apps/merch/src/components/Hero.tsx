export function Hero() {
  return (
    <section className="relative bg-ink">
      <div
        className="flex min-h-[500px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://picsum.photos/seed/merch-hero/1600/600)',
        }}
      >
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
            Spring / Summer Collection
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            The New Way To Display Product
          </h1>
          <a
            href="#new"
            className="mt-8 inline-block bg-primary-400 px-10 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-400"
          >
            Explore now
          </a>
        </div>
      </div>
    </section>
  )
}
