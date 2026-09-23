const posts = [
  {
    image: 'https://picsum.photos/seed/nascent-blog1/400/250',
    category: 'Product',
    title: 'Introducing Workspaces 2.0',
    excerpt:
      'A completely rebuilt workspace experience with faster load times, better collaboration tools, and real-time sync.',
  },
  {
    image: 'https://picsum.photos/seed/nascent-blog2/400/250',
    category: 'Engineering',
    title: 'How we scaled to 1M users',
    excerpt:
      'Behind the scenes of our infrastructure journey — from a single server to a globally distributed platform.',
  },
  {
    image: 'https://picsum.photos/seed/nascent-blog3/400/250',
    category: 'Design',
    title: 'Building a design system from scratch',
    excerpt:
      'Lessons learned creating a consistent design language across 20+ product surfaces and 50+ components.',
  },
]

export function Blog() {
  return (
    <section data-testid="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold font-heading text-gray-900">Our latest blog</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded bg-white shadow transition hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 rounded bg-orange-400 px-3 py-1 text-xs font-bold text-white">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold font-heading text-gray-900">{post.title}</h3>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
