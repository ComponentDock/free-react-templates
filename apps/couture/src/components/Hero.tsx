export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black"
      aria-label="Welcome"
    >
      <img
        src="https://picsum.photos/seed/couture-1/1600/900"
        alt="Model wearing a couture dress"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-y-0 left-0 w-1/2 bg-brand/60" aria-hidden="true" />

      <span
        aria-hidden="true"
        className="absolute left-6 top-1/2 hidden -translate-y-1/2 font-display text-xs uppercase tracking-[0.5em] text-white/70 md:block [writing-mode:vertical-rl]"
      >
        Couture — Time to get dress
      </span>
      <span
        aria-hidden="true"
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 font-display text-xs uppercase tracking-[0.5em] text-white/70 md:block [writing-mode:vertical-rl] [transform:rotate(180deg)]"
      >
        Since — 1985
      </span>

      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-5xl font-bold uppercase tracking-wide text-white md:text-8xl">
          Le Stylist
        </h1>
        <h2 className="mt-4 font-display text-lg uppercase tracking-[0.25em] text-white md:text-xl">
          Wear Your Dress
        </h2>
      </div>
    </section>
  )
}
