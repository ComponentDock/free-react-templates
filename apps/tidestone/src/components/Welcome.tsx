export function Welcome() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image grid */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3">
              <img
                src="https://picsum.photos/seed/tidestone-welcome1/400/300"
                alt="Hotel room interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-2">
              <img
                src="https://picsum.photos/seed/tidestone-welcome2/200/300"
                alt="Hotel lobby"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="col-span-5">
              <img
                src="https://picsum.photos/seed/tidestone-welcome3/600/200"
                alt="Hotel pool area"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="mb-6 font-display text-3xl font-bold text-ink">
              <span className="mb-1 block">Welcome</span> to our residence
            </h2>
            <p className="mb-4 leading-relaxed text-mist">
              Beginning blessed second a creepeth. Darkness wherein fish years good air whose after
              seed appear midst evenin, appear void give third bearing divide one so blessed moved
              firmament gathered.
            </p>
            <p className="mb-6 leading-relaxed text-mist">
              Beginning blessed second a creepeth. Darkness wherein fish years good air whose after
              seed appear midst evenin, appear void give third bearing divide one so blessed.
            </p>
            <a
              href="#about"
              className="inline-block border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
