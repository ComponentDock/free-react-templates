/** Full-height hero photo under a heavy red overlay: giant white "STALWART"
 *  watermark, large headline and an uppercase "Discover Work" text link. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[900px] items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,26,53,0.82), rgba(255,26,53,0.82)), url(https://picsum.photos/seed/stalwart-hero/1920/1080)',
      }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-16">
        <span className="pointer-events-none absolute -top-28 left-0 select-none font-display text-[9rem] font-semibold uppercase leading-none tracking-tight text-white/20 lg:text-[11rem]">
          Construction
        </span>
        <div className="relative">
          <h1 className="max-w-3xl font-display text-5xl font-semibold uppercase leading-[1.1] text-white lg:text-[5.5rem]">
            Innovation starts with a dream and a plan
          </h1>
          <p className="mt-10 flex items-center gap-4">
            <span className="inline-block h-0.5 w-6 bg-white" aria-hidden="true" />
            <a
              href="#services"
              className="text-lg font-normal uppercase tracking-wide text-white hover:text-white/80"
            >
              Discover Work
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
