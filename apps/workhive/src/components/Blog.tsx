const posts = [
  {
    image: 'https://picsum.photos/seed/workhive-blog1/600/400',
    title: 'The Future of Coworking Spaces',
    excerpt: 'How flexible work environments are reshaping the way teams collaborate and innovate.',
  },
  {
    image: 'https://picsum.photos/seed/workhive-blog2/600/400',
    title: 'Designing Productive Workspaces',
    excerpt: 'Key principles behind creating spaces that boost creativity and focus.',
  },
  {
    image: 'https://picsum.photos/seed/workhive-blog3/600/400',
    title: 'Community Building in Shared Spaces',
    excerpt: 'Why the best coworking spaces prioritize community and networking.',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-primary">
            Our Insights
          </span>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl font-display">Company Insights</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-ink">{post.title}</h3>
                <p className="text-sm text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
