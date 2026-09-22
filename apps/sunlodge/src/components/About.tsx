export function About() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Centered heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold leading-snug text-ink md:text-4xl">
            Ullamcorper mattis, pulvinar dapibus. Discover the comfort and elegance of Sunlodge.
          </h2>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          {/* Left: text */}
          <div className="max-w-md">
            <h3 className="font-heading text-2xl font-bold text-ink">
              Luxury stays with a personal touch
            </h3>
            <p className="mt-4 leading-relaxed text-mute">
              Leather detail shoulder contrastic colour contour stunning silhouette working peplum.
              Statement buttons cover-up tweaks patch. Premium accommodations designed for the
              discerning traveler.
            </p>
            <a
              href="#rooms"
              className="mt-6 inline-block border-2 border-brand bg-transparent px-8 py-3 text-sm font-semibold tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>

          {/* Right: overlapping images */}
          <div className="relative h-72 w-full max-w-lg lg:h-80">
            <img
              src="https://picsum.photos/seed/sunlodge-about1/500/350"
              alt="Scenic hotel landscape view"
              className="absolute right-0 top-0 h-56 w-3/4 rounded object-cover shadow-lg lg:h-64"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/sunlodge-about2/400/300"
              alt="Cozy hotel interior"
              className="absolute bottom-0 left-0 h-48 w-2/3 rounded object-cover shadow-lg lg:h-56"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
