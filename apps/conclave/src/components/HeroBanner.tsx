/* Hero Banner: full-width background image with white text overlay,
   date line, heading, and a pink "Buy Ticket" CTA button. */

export function HeroBanner() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[560px] w-full items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/conclave-hero/1920/800)' }}
      />
      <div className="absolute inset-0 bg-[#111429]/60" />

      <div className="relative z-10 text-center px-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/90">
          20-22 January, 2025, Buffalo City
        </p>
        <h1
          className="mt-4 text-5xl font-bold uppercase tracking-wide text-white md:text-7xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          UX Conference 2025
        </h1>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="inline-flex items-center rounded-[4px] bg-[#ea0763] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-[#c90656]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Buy Ticket
          </a>
        </div>
      </div>
    </section>
  )
}
