export function HeroSlider() {
  return (
    <section
      className="relative flex min-h-[500px] items-center overflow-hidden bg-ink"
      aria-label="Hero banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/riviere-hero/1920/600)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 py-20 text-white">
        <div className="max-w-lg">
          <span className="mb-3 inline-block rounded-full bg-brand px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            60% Discount
          </span>
          <h1 className="font-[var(--font-heading)] mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Winter
            <br />
            Collection
          </h1>
          <p className="mb-6 text-base text-gray-200">
            Best Cloth Collection By 2020! Discover the latest trends in winter fashion with our
            exclusive collection.
          </p>
          <a
            href="#shop"
            className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand hover:border-brand"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
