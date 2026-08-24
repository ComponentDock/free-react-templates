export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left image */}
          <div>
            <img
              src="https://picsum.photos/seed/lexicon-about1/600/500"
              alt="Luxury hotel lobby"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Right text */}
          <div>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Luxury & Comfort: Our Services and Wonders of Prague
            </h2>
            <p className="mt-4 leading-relaxed text-mist">
              Discover a world of elegance and warmth where every detail is crafted for your
              comfort. From our beautifully appointed rooms to our world-class dining, we ensure
              your stay is nothing short of extraordinary.
            </p>
            <a
              href="#rooms"
              className="mt-6 inline-block border border-brand px-11 py-3 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Side image (desktop only) */}
        <div className="mt-10 hidden lg:block">
          <img
            src="https://picsum.photos/seed/lexicon-about2/1200/400"
            alt="Hotel panoramic view"
            className="w-full rounded object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
