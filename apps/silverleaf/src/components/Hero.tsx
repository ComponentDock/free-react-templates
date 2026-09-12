export function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/silverleaf-hero/1920/1080)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-center">
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-6xl">
          Expert Care for the Elderly
        </h1>
        <p className="mb-8 text-lg text-white/90">
          Providing compassionate and professional care services for your loved ones. Our dedicated
          team ensures comfort, dignity, and happiness in every moment.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-full bg-brand px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}
