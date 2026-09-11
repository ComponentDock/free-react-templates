const posts = [
  {
    title: 'How to Choose the Right Hosting Plan',
    date: 'Sep 10, 2026',
    author: 'Admin',
    comments: 5,
    img: 'https://picsum.photos/seed/hostcraft-blog1/400/275',
  },
  {
    title: 'Top 10 Web Performance Tips',
    date: 'Sep 8, 2026',
    author: 'Editor',
    comments: 3,
    img: 'https://picsum.photos/seed/hostcraft-blog2/400/275',
  },
  {
    title: 'Understanding Cloud VPS Technology',
    date: 'Sep 5, 2026',
    author: 'Admin',
    comments: 8,
    img: 'https://picsum.photos/seed/hostcraft-blog3/400/275',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-bg-main py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-primary">Recent Blog</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="mb-4 overflow-hidden rounded-t-[50%_50%_0_0]">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-[275px] w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex gap-4 text-xs text-text-meta">
                <span>{post.date}</span>
                <span>By {post.author}</span>
                <span>{post.comments} Comments</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-text-primary transition-colors group-hover:text-brand">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
