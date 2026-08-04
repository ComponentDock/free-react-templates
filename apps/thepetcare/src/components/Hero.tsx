export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy3">
      <img
        src="https://picsum.photos/seed/thepetcare-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Saving Animals Changing Live
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-white/90">
            Far far away, behind the word mountains, far from the countries Vokalia — we care for
            every animal with love and dedication.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-brand px-11 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-navy3"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  )
}
