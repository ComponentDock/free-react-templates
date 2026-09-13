export function ProjectCTA() {
  return (
    <section className="relative py-20">
      <img
        src="https://picsum.photos/seed/domicile-cta/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold uppercase text-white sm:text-4xl">
          Get to Know Project Estimate?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          There is a moment in the life of any aspiring astronomer that it is time to buy that first
          telescope. It&apos;s exciting to think about setting up your own viewing station whether
          that is on the deck.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center justify-center bg-white px-10 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-primary-400 hover:text-white"
        >
          Get Free Estimate
        </a>
      </div>
    </section>
  )
}
