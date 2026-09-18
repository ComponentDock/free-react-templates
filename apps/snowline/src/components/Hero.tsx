export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(255,0,90,0.7) 0%, rgba(255,93,45,0.6) 64%, rgba(255,186,0,0.5) 100%), url(https://picsum.photos/seed/snowline-hero/1400/600)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <div className="max-w-xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/90">
            Winter Fashion
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Fashion Collection 2024
          </h1>
          <a
            href="#shop"
            className="mt-8 inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-heading shadow-lg transition-all hover:bg-brand-pink hover:text-white"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
