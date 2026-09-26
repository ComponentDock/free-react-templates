export function About() {
  return (
    <section id="about" className="relative bg-navy-900 py-24">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/filmvault-about/1600/600"
          alt=""
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-white md:text-4xl">
            I'm Ready to Exceed Expectations
          </h2>
          <p className="mt-6 font-[var(--font-sans)] text-base leading-relaxed text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet.
          </p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center border border-white/40 px-8 py-3 font-[var(--font-heading)] text-sm uppercase tracking-[3px] text-white transition-colors hover:bg-white hover:text-navy-900"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  )
}
