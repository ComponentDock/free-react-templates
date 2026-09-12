export function Hero() {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16"
      style={{ backgroundImage: "url('https://picsum.photos/seed/soiree-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm uppercase tracking-widest mb-4 font-[family-name:var(--font-montserrat)]">
          Prepare yourself for the
        </p>
        <h1 className="text-5xl md:text-7xl font-black mb-4 font-[family-name:var(--font-montserrat)]">
          conference
        </h1>
        <p className="text-lg mb-8 font-[family-name:var(--font-montserrat)]">
          12-14 February 2025 — Los Angeles, CA
        </p>
        <a
          href="#tickets"
          className="inline-block bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white px-8 py-3 rounded-full font-semibold transition-colors font-[family-name:var(--font-montserrat)]"
        >
          Buy Tickets Now
        </a>
      </div>
    </section>
  )
}
