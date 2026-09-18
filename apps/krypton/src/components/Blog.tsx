const posts = [
  {
    title: 'The Future of Digital Design',
    excerpt:
      'Exploring emerging trends in UI/UX that are shaping the way we build digital products.',
    date: 'Sep 10, 2026',
    img: 'https://picsum.photos/seed/krypton-blog1/600/400',
  },
  {
    title: 'Building Scalable Web Apps',
    excerpt: 'Architecture patterns and best practices for modern web application development.',
    date: 'Sep 5, 2026',
    img: 'https://picsum.photos/seed/krypton-blog2/600/400',
  },
  {
    title: 'Marketing in 2026',
    excerpt: 'How data-driven strategies are transforming digital marketing campaigns.',
    date: 'Aug 28, 2026',
    img: 'https://picsum.photos/seed/krypton-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Latest News
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body dark:text-gray-400">
            Insights and updates from our team.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <time className="text-xs font-medium uppercase tracking-wider text-primary-500">
                  {p.date}
                </time>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body dark:text-gray-400">
                  {p.excerpt}
                </p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-semibold text-primary-500 transition-colors hover:text-primary-600"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
