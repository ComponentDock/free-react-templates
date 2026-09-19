export function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/cellarly-about/600/400"
              alt="Our story"
              className="rounded-lg object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div>
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-brand">
              Since 1905
            </span>
            <h2
              className="mb-6 text-3xl font-bold text-heading dark:text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Desire Meets A New Taste
            </h2>
            <p className="mb-4 text-ink dark:text-gray-400">
              For over a century, we have curated the finest spirits from around the world. Our
              passion for quality and craftsmanship drives every bottle we select.
            </p>
            <p className="mb-6 text-ink dark:text-gray-400">
              From small-batch bourbons to aged single malts, each spirit in our collection tells a
              story of tradition, heritage, and the pursuit of perfection.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-brand">115</span>
              <span className="text-sm text-ink dark:text-gray-400">
                Years of Experience In Business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
