export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/perk-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
            Now you can feel the Energy
          </p>
          <h1 className="mb-8 text-5xl font-semibold leading-tight text-white md:text-6xl">
            Start your day with
            <br />a black Coffee
          </h1>
          <a
            href="#coffee"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Buy Now
          </a>
        </div>
      </div>
    </section>
  )
}
