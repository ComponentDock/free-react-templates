const posts = [
  {
    title: 'We Are Providing the Quality Care',
    date: 'Sep 15, 2025',
    category: 'Healthcare',
    seed: 'healnova-blog-1',
  },
  {
    title: 'We Are Providing the Quality Care',
    date: 'Sep 10, 2025',
    category: 'Wellness',
    seed: 'healnova-blog-2',
  },
  {
    title: 'We Are Providing the Quality Care',
    date: 'Sep 05, 2025',
    category: 'Medical',
    seed: 'healnova-blog-3',
  },
] as const

export function Blog() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Latest Blog
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            <span className="text-brand">News</span> &amp; Updates
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={`Blog post: ${post.title}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-mist dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-mist dark:bg-gray-500" />
                  <span>{post.category}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                  <a href="#" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
