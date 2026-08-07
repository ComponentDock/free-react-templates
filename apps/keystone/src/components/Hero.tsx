export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[560px] items-center bg-navy">
      <img
        src="https://picsum.photos/seed/keystone-hero/1600/900"
        alt="Modern building facade against a dark sky"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          #1 Architecture Studio in United State
        </p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />

        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-none text-white sm:text-6xl">
          Focus on Design Quality
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          We create lasting impressions through architecture design.
        </p>

        <a
          href="#contact"
          className="mt-10 inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </a>
      </div>

      <span
        aria-hidden="true"
        className="absolute bottom-8 right-8 font-display text-5xl font-bold text-white/25"
      >
        01
      </span>
    </section>
  )
}
