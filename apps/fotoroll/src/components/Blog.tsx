const posts = [
  {
    seed: 'fotoroll-blog-1',
    title: 'The Art of Composition',
    excerpt:
      'Understanding composition is the foundation of every great photograph. Learn the rules that make images compelling.',
    date: '18th Dec',
  },
  {
    seed: 'fotoroll-blog-2',
    title: 'Shooting in Low Light',
    excerpt:
      'Night and indoor photography demand a different approach. Master the techniques that turn darkness into art.',
    date: '14th Dec',
  },
  {
    seed: 'fotoroll-blog-3',
    title: 'Finding Your Style',
    excerpt:
      'Every photographer has a unique vision. Discover how to develop a signature look that sets your work apart.',
    date: '10th Dec',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Latest from the Blog</h2>
          <p className="mx-auto max-w-xl text-ink-light">
            Tips, stories, and insights from behind the lens to help you elevate your photography
            skills.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed} className="flex flex-col">
              <img
                src={`https://picsum.photos/seed/${post.seed}/400/250`}
                alt={post.title}
                loading="lazy"
                className="w-full rounded-t-lg object-cover"
              />
              <div className="flex flex-1 flex-col rounded-b-lg bg-gallery p-6">
                <h3 className="mb-3 text-lg font-semibold uppercase tracking-wide text-ink">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-light">{post.excerpt}</p>
                <span className="text-xs text-ink-light">{post.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
