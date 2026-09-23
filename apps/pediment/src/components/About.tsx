export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
              who are we
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-body sm:text-4xl">
              We propose and discuss design rules
            </h2>
            <div className="space-y-4 text-mist">
              <p>
                Metasurfaces are generally designed by placing scatterers in periodic or
                pseudo-periodic grids. We propose and discuss design rules for functional
                metasurfaces with randomly placed.
              </p>
              <p>
                Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia
                non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.
              </p>
            </div>
            <a
              href="#services"
              className="mt-8 inline-block border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden">
              <img
                src="https://picsum.photos/seed/pediment-about/600/500"
                alt="Interior design showcase"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
