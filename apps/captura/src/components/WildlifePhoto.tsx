export function WildlifePhoto() {
  return (
    <section className="bg-surface-alt py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/captura-wildlife/800/600"
            alt="Wildlife photography"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-heading">Wildlife photography</h2>
          <p className="text-base leading-relaxed text-body">
            Whether you&apos;re about to create a website for the first time, or you&apos;re looking
            for a theme that provides advanced capabilities.
          </p>
          <a
            href="#albums"
            className="inline-block bg-dark px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-brand-400"
          >
            Explore Work
          </a>
        </div>
      </div>
    </section>
  )
}
