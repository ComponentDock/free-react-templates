const POSTS = [
  {
    id: 1,
    title: 'Spring Style Guide 2026',
    excerpt: 'Explore the freshest trends for the upcoming season with our curated picks.',
    date: 'Mar 15, 2026',
    category: 'Fashion',
    image: 'https://picsum.photos/seed/shopbox-blog1/600/400',
  },
  {
    id: 2,
    title: 'Accessorize Like a Pro',
    excerpt: 'From bags to watches, elevate any outfit with the right accessories.',
    date: 'Mar 10, 2026',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/shopbox-blog2/600/400',
  },
  {
    id: 3,
    title: 'Sustainable Fashion Choices',
    excerpt: 'How to build a wardrobe that looks good and does good for the planet.',
    date: 'Mar 5, 2026',
    category: 'Sustainability',
    image: 'https://picsum.photos/seed/shopbox-blog3/600/400',
  },
]

export function BlogSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary-500">From the Blog</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.id}>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
              <div className="mt-4">
                <div className="mb-2 text-xs text-gray-400">
                  {post.date} · {post.category}
                </div>
                <a
                  href="#"
                  className="text-lg font-semibold text-gray-800 transition hover:text-accent"
                >
                  {post.title}
                </a>
                <p className="mt-2 text-sm text-gray-500">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-2 inline-block text-xs font-medium uppercase text-accent transition hover:text-accent-hover"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
