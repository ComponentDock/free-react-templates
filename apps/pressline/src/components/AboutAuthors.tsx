export function AboutAuthors() {
  return (
    <section id="about" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-300">
              Welcome to Pressline
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl">
              Pressline Created By Authors
            </h2>
            <p className="mt-5 leading-relaxed text-smoke">
              We are a passionate team of writers, editors, and designers dedicated to bringing
              extraordinary stories to readers worldwide. Every book we publish is crafted with care
              and attention to detail.
            </p>
            <p className="mt-4 leading-relaxed text-smoke">
              From debut novelists to established voices, we champion diverse perspectives and
              believe that great stories have the power to change the world.
            </p>
            <a
              href="#authors"
              className="mt-6 inline-flex items-center rounded bg-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              View All Our Authors
            </a>
          </div>

          {/* Author images grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://picsum.photos/seed/pressline-author1/400/500"
              alt="Author portrait"
              className="h-48 w-full rounded object-cover md:h-64"
            />
            <img
              src="https://picsum.photos/seed/pressline-author2/400/500"
              alt="Author portrait"
              className="mt-8 h-48 w-full rounded object-cover md:mt-12 md:h-64"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
