export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/fellowship-hero-1/1920/1080')",
      }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-8 font-heading text-5xl font-light text-white md:text-7xl">
          Let your light so shine before men.
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-medium text-white transition-opacity hover:opacity-80"
          >
            Visit Our Church
          </a>
        </div>
      </div>
    </section>
  )
}
