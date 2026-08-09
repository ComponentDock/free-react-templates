const posts = [
  {
    title: "Benjamin Franklin's Method Of Habit Formation",
    meta: 'By Admin · 02 Jan 2020',
    excerpt:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'How To Set Intentions That Energize You',
    meta: 'By Admin · 05 Jan 2020',
    excerpt:
      'Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida.',
  },
  {
    title: 'Burning Desire: Golden Key Or Red Herring',
    meta: 'By Admin · 09 Jan 2020',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Blog</p>
          <h2 className="mt-2 font-display text-3xl font-black text-ink dark:text-white">
            Latest News Updates
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900"
            >
              <img
                src={`https://picsum.photos/seed/clutch-blog-${index + 1}/600/360`}
                alt=""
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">{post.meta}</p>
                <h3 className="mt-2 font-display text-lg font-black leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{post.excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-brand-dark"
                >
                  View More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
