export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/ravida-hero/1920/1080)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
            Expensive but the best
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Modern restaurant in center of the city
          </h1>
          <a
            href="#contact"
            className="mt-8 inline-block bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  )
}
