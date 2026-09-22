const posts = [
  {
    title: 'Hotel amenities you must have',
    date: 'August 10, 2025',
    comments: 12,
    image: 'pavilion-blog1',
  },
  {
    title: 'Amazing travel experiences',
    date: 'July 28, 2025',
    comments: 8,
    image: 'pavilion-blog2',
  },
  {
    title: 'Best hotel for vacation',
    date: 'July 15, 2025',
    comments: 15,
    image: 'pavilion-blog3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Latest News
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">Our Blog</h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.image}/600/400`}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded bg-brand px-3 py-1 text-xs font-bold uppercase text-white">
                  news
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{post.title}</h3>
                <div className="mt-3 flex items-center gap-4 text-xs text-mist">
                  <span>{post.date}</span>
                  <span>{post.comments} Comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
