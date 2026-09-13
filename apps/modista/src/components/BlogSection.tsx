const posts = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/modista-blog1/400/300',
    category: 'fashion',
    title: 'Top 10 Summer Fashion Trends',
    excerpt:
      'Discover the hottest fashion trends this summer with our curated guide to the latest styles and must-have pieces.',
    date: '21.09.2017',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/modista-blog2/400/300',
    category: 'fashion',
    title: 'How to Style Your New Jacket',
    excerpt:
      'From casual to formal, learn how to create versatile outfits with your favorite jacket.',
    date: '18.09.2017',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/modista-blog3/400/300',
    category: 'fashion',
    title: 'Accessories That Complete Your Look',
    excerpt: 'The right accessories can transform any outfit. Explore our picks for the season.',
    date: '15.09.2017',
  },
] as const

export function BlogSection() {
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10" aria-label="Blog">
      <h2 className="mb-8 text-center font-heading text-2xl font-bold uppercase tracking-wide text-text-heading">
        From The Blog
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="group">
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-red">
                {post.category}
              </span>
              <h3 className="mt-1 text-base font-semibold text-text-heading">{post.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{post.excerpt}</p>
              <p className="mt-2 text-xs text-text-muted">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
