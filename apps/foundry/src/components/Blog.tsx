const posts = [
  {
    title: 'Construction was awarded with "The Best Construction Company" prize',
    date: '20 Jan, 2017',
  },
  {
    title: 'New Doublered Residence Facility Occupied and Second to Begin this Month',
    date: '20 Jan, 2017',
  },
  {
    title: "New Saint Michael's College Residence Hall Buzzing with Student Activity",
    date: '20 Jan, 2017',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">News</p>
        <span aria-hidden="true" className="mt-3 block h-1 w-14 bg-brand" />
        <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
          Read Our Blog
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="overflow-hidden border border-line bg-white transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/foundry-blog-${i + 1}/600/400`}
                alt=""
                aria-hidden="true"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-mist dark:text-gray-400">
                  — {post.date}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase leading-snug text-ink dark:text-white">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-block bg-brand px-10 py-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
          >
            View All Blog Post
          </a>
        </div>
      </div>
    </section>
  )
}
