export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/grain-hero/1920/1080)',
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-lg">
          <span className="mb-4 inline-block rounded bg-brand/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white">
            Interior
          </span>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            White Sofas
          </h1>
          <p className="mb-8 text-lg text-white/80">
            A small river named Duden flows by their place and supplies the regelialia with the
            necessary regelialia.
          </p>
          <a
            href="#gallery"
            className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  )
}
