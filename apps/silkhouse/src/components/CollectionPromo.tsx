export function CollectionPromo() {
  return (
    <section aria-label="Collection promotion" className="relative py-24">
      <img
        src="https://picsum.photos/seed/silkhouse-cta/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <p className="mb-2 text-sm uppercase tracking-widest text-white/80">Limited Edition</p>
        <h2
          className="mb-6 text-3xl font-semibold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Our Collection Houses Our First-Ever
        </h2>
        <a
          href="#about"
          className="inline-block border-2 border-brand bg-brand px-10 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-hover hover:border-brand-hover"
        >
          About Us
        </a>
      </div>
    </section>
  )
}
