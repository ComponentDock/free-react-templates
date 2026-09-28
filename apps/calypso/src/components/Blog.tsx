const posts = [
  {
    image: 'https://picsum.photos/seed/blog-1/600/400',
    category: 'Design',
    date: 'Sep 20, 2026',
    title: 'The Future of Design Systems in 2026',
  },
  {
    image: 'https://picsum.photos/seed/blog-2/600/400',
    category: 'UX Research',
    date: 'Sep 10, 2026',
    title: 'How to Run Effective User Interviews',
  },
  {
    image: 'https://picsum.photos/seed/blog-3/600/400',
    category: 'Career',
    date: 'Aug 28, 2026',
    title: 'From Junior to Senior: Growing as a Designer',
  },
] as const

export function Blog() {
  return (
    <section data-testid="blog" id="blog" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            Blog
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-600 dark:bg-brand-950 dark:text-brand-400">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-400">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
