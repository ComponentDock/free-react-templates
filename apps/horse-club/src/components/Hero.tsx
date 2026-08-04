export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[80vh] items-center overflow-hidden bg-brand">
      <img
        src="https://picsum.photos/seed/horseclub-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <h6 className="text-sm font-semibold uppercase tracking-widest text-white/80">
            Introducing Horse Club
          </h6>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Inter relation Between Horse &amp; Rider
          </h1>
          <p className="mt-6 text-base font-light leading-relaxed text-white/90">
            We've made a life that will change you — riding lessons, training, and events for every
            equestrian enthusiast.
          </p>
          <a
            href="#consultancy"
            className="mt-8 inline-block rounded-full bg-white px-11 py-4 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-ink hover:text-white"
          >
            Book Consultancy
          </a>
        </div>
      </div>
    </section>
  )
}
