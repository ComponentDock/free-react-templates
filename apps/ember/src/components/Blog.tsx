const posts = [
  {
    date: 'Apr 06, 2024',
    category: 'Food News',
    title: 'New seasonal menu launched with locally sourced ingredients',
    image: 'https://picsum.photos/seed/ember-blog1/600/400',
  },
  {
    date: 'Mar 22, 2024',
    category: 'Chef Tips',
    title: 'The art of slow cooking: patience makes perfect',
    image: 'https://picsum.photos/seed/ember-blog2/600/400',
  },
  {
    date: 'Mar 10, 2024',
    category: 'Events',
    title: "Valentine's Day special five-course dinner experience",
    image: 'https://picsum.photos/seed/ember-blog3/600/400',
  },
  {
    date: 'Feb 28, 2024',
    category: 'Food News',
    title: 'Farm-to-table partnership with Green Valley Organics',
    image: 'https://picsum.photos/seed/ember-blog4/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Recent News
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Latest From Blog
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-mist dark:text-gray-400">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-brand" aria-hidden="true" />
                  <span className="text-brand">#{post.category}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
                <a
                  href="#blog"
                  className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide text-brand hover:text-brand-dark"
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
