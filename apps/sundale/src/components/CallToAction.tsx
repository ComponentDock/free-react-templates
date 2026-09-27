export function CallToAction() {
  return (
    <section className="relative min-h-[400px]">
      {/* Parallax background */}
      <img
        src="https://picsum.photos/seed/sundale-cta/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex min-h-[400px] items-center">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Are you looking for a place to rent?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Suspendisse dictum enim sit amet libero malesuada feugiat.
          </p>
          <a
            href="#properties"
            className="inline-block rounded bg-tan-500 px-10 py-3 text-sm font-semibold text-white transition-colors hover:bg-tan-600"
          >
            Search
          </a>
        </div>
      </div>
    </section>
  )
}
