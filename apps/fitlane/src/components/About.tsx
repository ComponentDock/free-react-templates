export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-5">
        {/* Content (8/12 ≈ 3/5) */}
        <div className="lg:col-span-3">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Aerobics Program
          </p>
          <h2 className="mb-6 font-display text-3xl font-bold text-ink">About Fitlane</h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Aenean auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet
            ornare mauris malesuada in. Duis rutrum nisi tempus finibus luctus. Sed porta vel lacus
            quis lacinia. Vestibulum nec justo lectus. In hac habitasse platea dictumst. Proin
            vulputate rhoncus nibh eu vehicula. Donec vitae laoreet quam, ac feugiat nibh. Aenean
            auctor nisl vitae auctor faucibus. Pellentesque imperdiet auctor eros, sit amet ornare
            mauris malesuada in. Duis rutrum nisi tempus finibus luctus.
          </p>
          <a
            href="#contact"
            className="inline-block rounded bg-primary-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary-600"
          >
            Read More
          </a>
        </div>

        {/* Image (4/12 ≈ 2/5) */}
        <div className="lg:col-span-2">
          <img
            src="https://picsum.photos/seed/fitlane-about/600/500"
            alt="Fitlane gym training session"
            loading="lazy"
            className="w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  )
}
