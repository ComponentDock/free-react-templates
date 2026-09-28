export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/zing-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <p className="mb-2 text-lg text-white/80" style={{ fontFamily: 'var(--font-dancing)' }}>
          Since 1985
        </p>
        <h1
          className="mb-8 text-5xl font-bold text-white md:text-7xl"
          style={{ fontFamily: 'var(--font-dancing)' }}
        >
          Cooking Since Best Quality
        </h1>
        <a
          href="#reservation"
          className="inline-block rounded bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
        >
          Book Your Table
        </a>
      </div>
    </section>
  )
}
