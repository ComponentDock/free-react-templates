const posts = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/modista-blog1/400/250',
    category: 'fashion',
    title: 'Summer Fashion Trends 2024',
    excerpt:
      'Discover the hottest fashion trends for this summer season, from vibrant colors to minimalist designs.',
    date: '21.09.2024',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/modista-blog2/400/250',
    category: 'fashion',
    title: 'How to Style Your Wardrobe',
    excerpt: 'Tips and tricks on how to mix and match your clothing for a perfect everyday look.',
    date: '18.09.2024',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/modista-blog3/400/250',
    category: 'fashion',
    title: 'Accessorizing Like a Pro',
    excerpt:
      'The right accessories can transform any outfit. Learn how to choose the perfect pieces.',
    date: '15.09.2024',
  },
] as const

export function BlogSection() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-12" aria-label="Blog section">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-text-heading">
        From The Blog
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id}>
            <div className="overflow-hidden">
              <img src={post.image} alt={post.title} className="h-[200px] w-full object-cover" />
            </div>
            <div className="mt-4">
              <span className="text-xs font-semibold uppercase text-brand-red">
                {post.category}
              </span>
              <h3 className="mt-2 font-heading text-base font-semibold text-text-heading hover:text-brand-red transition-colors">
                <a href="#blog">{post.title}</a>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{post.excerpt}</p>
              <p className="mt-2 text-xs text-text-muted">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
