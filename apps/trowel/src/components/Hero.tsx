export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/trowel-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white">
          Future Construction
        </p>
        <div className="mx-auto mb-6 h-0.5 w-12 bg-brand-500" />
        <h1 className="mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Make your dream home
          <br />
          with Trowel
        </h1>
        <a
          href="#contact"
          className="inline-block bg-brand-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
