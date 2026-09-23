const posts = [
  {
    title: 'How to Scale Your SaaS Product Effectively',
    description:
      'Discover proven strategies for scaling your SaaS product from startup to enterprise-level success.',
    image: 'https://picsum.photos/seed/nimbus-blog1/600/400',
    tags: ['Technology', 'Growth'],
    date: 'January 15, 2025',
  },
  {
    title: 'The Future of Cloud-Based Platforms',
    description:
      'Explore emerging trends in cloud computing and how they will shape the next generation of SaaS tools.',
    image: 'https://picsum.photos/seed/nimbus-blog2/600/400',
    tags: ['Cloud', 'Innovation'],
    date: 'February 3, 2025',
  },
]

export function Blog() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Latest from our Blog</h2>
          <p className="text-smoke">Insights and updates from the Nimbus team.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title}>
              <img
                src={post.image}
                alt={post.title}
                className="mb-4 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <div className="mb-3 flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-primary-400 px-3 py-1 text-xs text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">{post.title}</h3>
              <p className="mb-2 text-sm leading-relaxed text-smoke">{post.description}</p>
              <p className="text-xs text-smoke">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
