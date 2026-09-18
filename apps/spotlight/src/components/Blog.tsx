const posts = [
  {
    image: 'https://picsum.photos/seed/spotlight-blog-1/800/500',
    title: 'How to List Your Property',
    author: 'Theresa Winston',
    date: 'Jan 18, 2026',
    category: 'News',
    excerpt:
      'Learn the best practices for listing your property on Spotlight to attract more visitors and get better engagement from potential customers.',
  },
  {
    image: 'https://picsum.photos/seed/spotlight-blog-2/800/500',
    title: 'Top 10 Hidden Gems in the City',
    author: 'Mark Stevens',
    date: 'Jan 12, 2026',
    category: 'Guides',
    excerpt:
      'Discover the most underrated spots in the city that locals love but tourists often miss. From cozy cafes to stunning parks.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary">Our Blog</h2>
          <p className="text-body">See Our Daily News &amp; Updates</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-heading">
                  <a href="#" className="transition-colors hover:text-primary">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-xs text-body">
                  by {post.author} &bull; {post.date} &bull;{' '}
                  <a href="#" className="text-primary hover:text-primary-hover">
                    {post.category}
                  </a>
                </p>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
