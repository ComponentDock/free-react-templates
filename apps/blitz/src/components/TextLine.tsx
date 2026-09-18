export function TextLine() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/blitz-textline/600/400"
              alt="Integration showcase"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="mb-4 font-display text-3xl font-bold text-brand">
              We integrate the future
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-mist">
              Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus
              blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis efficitur ut.
            </p>
            <a
              href="#contact"
              className="inline-block rounded bg-accent px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-accent/90"
            >
              Discover More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
