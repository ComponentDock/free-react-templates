export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/farmfield/1920/1080')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/60" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 font-display text-3xl text-accent">Welcome to Greenfield</p>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Agriculture is the Most Healthful
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          We provide the best agricultural services and products to help you grow healthy, organic
          food for a sustainable future.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="rounded bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="rounded border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  )
}
