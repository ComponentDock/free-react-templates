export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[800px] items-center overflow-hidden">
      <img
        src="https://picsum.photos/id/60/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-gradient-vertical opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold uppercase leading-[1.25] text-white sm:text-5xl">
          We Combine Business with Finance
        </h1>
        <p className="mt-6 text-sm font-medium uppercase tracking-[2.1px] text-white">
          We work hard, we result perfect
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#services"
            className="inline-flex h-[50px] items-center justify-center rounded-[5px] bg-coral-gradient bg-left px-10 font-btn text-sm font-semibold uppercase tracking-wide text-white transition-[background-position] duration-300 ease-out hover:bg-right"
          >
            Explore Us
          </a>
          <a
            href="#contact"
            className="inline-flex h-[50px] items-center justify-center rounded-[5px] bg-mint-gradient bg-left px-10 font-btn text-sm font-semibold uppercase tracking-wide text-white transition-[background-position] duration-300 ease-out hover:bg-right"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
