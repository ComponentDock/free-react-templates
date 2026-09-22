export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/pavilion-hero/1600/900"
          alt="Pavilion hotel exterior at sunset"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:py-44">
        <div className="max-w-2xl text-center text-white">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.25em] text-brand">
            Hotel &amp; Resort
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Top Hotel in the City
          </h1>
          <p className="mt-6 flex items-center justify-center gap-4 text-sm uppercase tracking-[0.25em] text-white/80">
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
            Luxury &amp; Comfort
            <span className="h-px w-10 bg-brand" aria-hidden="true" />
          </p>
        </div>
      </div>
    </section>
  )
}
