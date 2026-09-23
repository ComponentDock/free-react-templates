export function Cta() {
  return (
    <section className="relative bg-ink py-20">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/pediment-cta/1920/600"
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="lazy"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="mb-4 inline-block font-display text-sm uppercase tracking-wider text-brand">
          Why choose us?
        </span>
        <h2 className="mb-8 font-display text-2xl leading-relaxed text-white sm:text-3xl">
          Our Ability To Deliver Outstanding Results For Our Clients Starts With Our Team Of Smart.
        </h2>
        <a
          href="#contact"
          className="inline-block bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
