interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  seed: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'How to Build a Strong Digital Presence',
    excerpt:
      'Discover the key strategies for establishing your business online with lasting impact.',
    date: '15 Mar, 2025',
    seed: 'acumen-blog-1',
    featured: true,
  },
  {
    id: 2,
    title: 'Top Trends in Web Design for 2025',
    excerpt: 'From AI-driven layouts to immersive 3D, these trends are shaping the web.',
    date: '10 Mar, 2025',
    seed: 'acumen-blog-2',
  },
  {
    id: 3,
    title: 'Why UX Matters More Than Ever',
    excerpt: 'User experience can make or break your product. Here is how to get it right.',
    date: '5 Mar, 2025',
    seed: 'acumen-blog-3',
  },
  {
    id: 4,
    title: 'Scaling Your Startup With Smart Tech',
    excerpt: 'The right technology stack can accelerate your growth exponentially.',
    date: '1 Mar, 2025',
    seed: 'acumen-blog-4',
  },
]

export function Blog() {
  const featured = posts.find((p) => p.featured)!
  const others = posts.filter((p) => !p.featured)

  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white">Latest Blog</h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded bg-gradient-to-r from-brand to-brand-light" />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Featured post — spans 2 cols */}
          <article className="group overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md lg:col-span-2 dark:bg-gray-900">
            <div className="overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${featured.seed}/800/400`}
                alt={featured.title}
                className="h-64 w-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-brand">{featured.date}</span>
              <h3 className="mt-2 font-display text-xl font-bold text-ink dark:text-white">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{featured.excerpt}</p>
              <a
                href="#blog"
                className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand-dark"
              >
                Read More →
              </a>
            </div>
          </article>

          {/* Side posts */}
          <div className="flex flex-col gap-6">
            {others.map((post) => (
              <article
                key={post.id}
                className="group flex gap-4 overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-900"
              >
                <img
                  src={`https://picsum.photos/seed/${post.seed}/200/200`}
                  alt={post.title}
                  className="h-28 w-28 shrink-0 object-cover"
                />
                <div className="py-3 pr-4">
                  <span className="text-xs font-medium text-brand">{post.date}</span>
                  <h3 className="mt-1 font-display text-sm font-bold text-ink dark:text-white">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-mist line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
