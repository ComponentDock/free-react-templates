export function History() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://picsum.photos/seed/ember-history/800/600"
              alt="Restaurant interior with warm lighting"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              Our History
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink dark:text-white">
              Where The Food's As Good As The Root Beer.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-mist dark:text-gray-400">
              Satisfying people hunger for simple pleasures. May over was. Be signs two. Spirit.
              Brought said dry own firmament lesser best sixth deep abundantly bearing, him,
              gathering you blessed bearing he our position best ticket in month hole deep.
            </p>
            <a
              href="#menu"
              className="mt-6 inline-block rounded-lg bg-brand px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-brand-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
