export function ParallaxConference() {
  return (
    <section className="relative h-96 w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/lounge-conference/1920/800"
        alt="Conference centre"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand">
          Our Conference
        </p>
        <h2 className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl">
          Conference Centre
        </h2>
        <button className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
          View more details
        </button>
      </div>
    </section>
  )
}
