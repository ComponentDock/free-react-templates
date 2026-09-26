const blogPosts = [
  {
    title: 'Renovating National Gallery: A Design Case Study',
    excerpt:
      "Exploring the challenges and triumphs of redesigning one of the world's most iconic art spaces for the digital age.",
    category: 'Design',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/jockford-blog1/800/500',
    featured: true,
  },
  {
    title: 'WordPress for Beginners: Getting Started Guide',
    excerpt: 'A comprehensive guide to setting up your first WordPress site from scratch.',
    category: 'Development',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/jockford-blog2/400/250',
    featured: false,
  },
  {
    title: 'Building Modern Websites from Scratch',
    excerpt: 'Tips and techniques for creating responsive, performant websites using modern tools.',
    category: 'Tutorial',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/jockford-blog3/400/250',
    featured: false,
  },
]

export function Blog() {
  const featured = blogPosts.find((p) => p.featured)!
  const standard = blogPosts.filter((p) => !p.featured)

  return (
    <section id="blog" className="bg-bg-primary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-text-primary">From the Blog</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured post */}
          <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary shadow-sm">
            <img src={featured.image} alt={featured.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                {featured.category}
              </span>
              <p className="mb-2 text-xs text-text-muted">{featured.date}</p>
              <h3 className="mb-2 text-xl font-bold text-text-primary">{featured.title}</h3>
              <p className="mb-4 text-sm text-text-secondary">{featured.excerpt}</p>
              <button className="p-0 text-sm font-medium text-brand hover:underline">
                Read more →
              </button>
            </div>
          </div>

          {/* Standard posts */}
          <div className="flex flex-col gap-6">
            {standard.map((post) => (
              <div
                key={post.title}
                className="flex gap-4 overflow-hidden rounded-xl border border-border bg-bg-secondary shadow-sm"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-40 flex-shrink-0 object-cover"
                />
                <div className="flex flex-col justify-center p-4">
                  <span className="mb-1 inline-block w-fit rounded-full bg-brand/10 px-2 py-0.5 text-xs font-medium text-brand">
                    {post.category}
                  </span>
                  <p className="mb-1 text-xs text-text-muted">{post.date}</p>
                  <h3 className="mb-1 text-base font-bold text-text-primary">{post.title}</h3>
                  <p className="mb-2 text-xs text-text-secondary">{post.excerpt}</p>
                  <button className="p-0 text-xs font-medium text-brand hover:underline">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
