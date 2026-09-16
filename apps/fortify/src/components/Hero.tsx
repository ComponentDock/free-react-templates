export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/fortify-hero/1600/600)' }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <h6 className="mb-3 text-sm font-medium uppercase tracking-widest text-white/80">
            Security &amp; IT Solutions
          </h6>
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            Protecting Your Digital Future
          </h1>
          <p className="mb-8 max-w-lg text-base text-white/70">
            Comprehensive cybersecurity solutions to safeguard your business against modern threats.
            Trusted by thousands of organizations worldwide.
          </p>
          <a
            href="#"
            className="inline-block bg-brand px-10 py-3.5 text-sm font-semibold uppercase text-white transition hover:bg-transparent hover:text-brand hover:ring-2 hover:ring-brand"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
