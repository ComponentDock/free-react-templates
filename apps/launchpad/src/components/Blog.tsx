interface BlogPost {
  image: string
  tags: string[]
  title: string
  excerpt: string
  date: string
}

const posts: BlogPost[] = [
  {
    image: 'https://picsum.photos/seed/launchpad-b1/800/500',
    tags: ['Technology', 'Startup'],
    title: 'How to Build a Scalable SaaS from Day One',
    excerpt:
      'Launching a SaaS product requires more than just a good idea. Learn the foundational architecture decisions that separate winners from the rest.',
    date: 'September 10, 2026',
  },
  {
    image: 'https://picsum.photos/seed/launchpad-b2/800/500',
    tags: ['Design', 'Growth'],
    title: 'The Art of User-Centric Onboarding Flows',
    excerpt:
      'First impressions matter. Discover how leading startups design onboarding experiences that convert trial users into loyal customers.',
    date: 'September 5, 2026',
  },
]

export function Blog() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Latest News from our Blog</h2>
          <p className="mt-2 text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.title} className="group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-brand-50 px-3 py-1 text-xs font-medium text-brand-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900 transition group-hover:text-brand-600">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
              <p className="mt-3 text-xs text-gray-400">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
