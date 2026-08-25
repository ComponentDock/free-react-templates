export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-ink bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(https://picsum.photos/seed/solace-hero/1920/1080)',
      }}
    >
      <div className="px-4 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-brand">
          Enjoy Your Wonderful Holidays
        </p>
        <h1 className="font-heading text-5xl font-bold text-white md:text-7xl">
          Most Relaxing Place
        </h1>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#tour"
            className="rounded bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            Take A Tour
          </a>
          <a
            href="#about"
            className="border-2 border-white px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
