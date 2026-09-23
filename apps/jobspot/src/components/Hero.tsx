export function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden">
      <img
        src="https://picsum.photos/seed/jobspot-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-gray-200">
          Love what you do? Thousands are looking for you!
        </span>
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
          10,650<span className="text-brand-green">+</span> Jobs Listed Here!
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-200">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="rounded bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Contact us
          </a>
          <a
            href="#"
            className="rounded border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-brand-dark"
          >
            Search Job
          </a>
        </div>
      </div>
    </section>
  )
}
