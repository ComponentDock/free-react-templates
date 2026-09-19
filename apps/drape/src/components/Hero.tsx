export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[480px] bg-warm-900 flex items-center justify-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/drape-hero/2000/1200"
        alt="New season collection"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        fetchPriority="high"
      />
      <div className="relative z-10 text-center px-4">
        <span className="text-warm-200 text-sm tracking-widest uppercase opacity-80">
          New season
        </span>
        <h1 className="mt-3 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
          New season essentials
        </h1>
        <p className="mt-4 text-warm-200 text-lg max-w-md mx-auto">
          Considered pieces, made to be worn every day.
        </p>
        <div className="mt-8">
          <a
            href="#shop"
            className="inline-block bg-white text-warm-900 font-semibold px-8 py-3 text-sm tracking-wide hover:bg-warm-100 transition-colors"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  )
}
