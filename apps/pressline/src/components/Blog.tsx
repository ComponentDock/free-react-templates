const posts = [
  {
    title: 'New Friends With Books',
    excerpt:
      'Discover how reading can help you form meaningful connections with like-minded people.',
    date: 'Sep 12, 2026',
    seed: 'pressline-blog1',
  },
  {
    title: 'New Friends With Books',
    excerpt:
      'The art of building a personal library that reflects your unique journey and interests.',
    date: 'Sep 10, 2026',
    seed: 'pressline-blog2',
  },
  {
    title: 'New Friends With Books',
    excerpt: 'Why independent publishers are shaping the future of the literary world.',
    date: 'Sep 8, 2026',
    seed: 'pressline-blog3',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-surface py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">Recent Blog</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article
              key={i}
              className="overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${post.seed}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <div className="text-xs text-smoke">{post.date}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-primary-300 transition-colors hover:text-primary-500"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
