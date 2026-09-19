export function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[500px] w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/cabinet-hero/2000/1100"
        alt="A living room furnished with Cabinet furniture"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative mx-auto flex h-full max-w-[1300px] items-center px-5 lg:px-10">
        <div className="max-w-lg bg-white/95 p-8 backdrop-blur-sm">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-brand">
            70% sale off
          </span>
          <h1 className="mb-4 text-5xl font-bold uppercase leading-tight text-navy md:text-6xl lg:text-7xl">
            Furniture at cost
          </h1>
          <p className="mb-6 text-base text-ink">
            Pieces built to be lived with — solid frames, honest materials and a price that makes
            sense.
          </p>
          <a
            href="#shop"
            className="inline-block bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand/90"
          >
            Discover more
          </a>
        </div>
      </div>
    </section>
  )
}
