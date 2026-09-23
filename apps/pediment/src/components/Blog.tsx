const posts = [
  {
    category: 'Architecture',
    title: 'Target and Amazon Shopping List for Home Stagers',
    image: 'https://picsum.photos/seed/pediment-blog1/600/400',
  },
  {
    category: 'Interior',
    title: '6 Ideas for Team Building and Employee Appreciation for Home Stagers',
    image: 'https://picsum.photos/seed/pediment-blog2/600/400',
  },
  {
    category: 'Planning',
    title: 'How to Find the Best Price Structure for Your Home Staging Services',
    image: 'https://picsum.photos/seed/pediment-blog3/600/400',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
              Latest News
            </span>
            <h2 className="font-display text-3xl font-bold text-body sm:text-4xl">From our blog</h2>
          </div>
          <a
            href="#"
            className="inline-block border-2 border-brand px-6 py-2 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
          >
            View All
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="group">
              <div className="mb-4 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-brand">
                  {post.category}
                </span>
                <h4 className="mb-3 font-display text-lg font-semibold text-body">{post.title}</h4>
                <a
                  href="#"
                  className="text-sm font-medium text-brand transition-colors hover:text-brand-dark"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
