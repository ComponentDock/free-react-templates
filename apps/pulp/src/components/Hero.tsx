export function Hero() {
  return (
    <section
      id="home"
      aria-label="Magazine hero"
      className="animate-hero-cycle relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/pulp-hero-bg/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="relative px-4 py-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[1.25em] text-white">Magazine</p>
        <h1
          className="mx-auto mt-6 bg-clip-text font-display text-[clamp(6rem,26vw,22rem)] uppercase leading-none text-transparent"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/pulp-wordmark/1600/900)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          Pulp
        </h1>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.7em] text-white">
          UK Edition
        </p>
      </div>
    </section>
  )
}
