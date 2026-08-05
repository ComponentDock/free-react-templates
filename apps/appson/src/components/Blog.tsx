const posts = [1, 2, 3] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Our Latest Blog
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Tips, stories, and product updates from the Appson team.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/appson-blog-${post}/600/400`}
                alt={`Appson blog post ${post}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                  Work For Success
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-gray-400">
                  Practical habits and proven workflows that keep ambitious teams moving forward.
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
