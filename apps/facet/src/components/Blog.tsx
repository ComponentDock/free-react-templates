const posts = [
  {
    id: 1,
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'March 2019',
    seed: 'facet-blog-1',
  },
  {
    id: 2,
    title: 'Interior Trends That Define the Modern Office',
    date: 'February 2019',
    seed: 'facet-blog-2',
  },
  {
    id: 3,
    title: 'How to Plan a Renovation on a Budget',
    date: 'January 2019',
    seed: 'facet-blog-3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog posts" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[3px] text-brand">Blog</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white">
          Read Our Stories
        </h2>
        <p className="mt-4 max-w-2xl text-mist dark:text-white/60">
          News, ideas, and stories from the Facet studio.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <a
                href="#blog"
                aria-label="Blog post image"
                className="block overflow-hidden rounded"
              >
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt="Blog post"
                  className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
              <p className="mt-4 text-xs uppercase tracking-[2px] text-mist dark:text-white/50">
                {post.date} by <span className="text-brand">Admin</span>
              </p>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink dark:text-white">
                <a href="#blog" className="hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <a
                href="#blog"
                className="mt-3 inline-block text-sm font-semibold text-brand underline-offset-4 hover:underline"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
