const posts = [
  {
    title: 'Discover Hidden Gems for Your Next Vacation',
    excerpt:
      'Acres of diamonds — you have read the famous story, or at least had it related to you. A farmer hears tales of riches and begins dreaming of a new future.',
    category: 'Travel',
    date: '30 Sep, 2026',
    comments: 2,
    image: 'grandeur-blog1',
  },
  {
    title: 'Top 10 Luxury Amenities Every Hotel Should Offer',
    excerpt:
      'From heated pools to personal concierge services, these amenities can transform an ordinary stay into an extraordinary experience.',
    category: 'Travel',
    date: '28 Sep, 2026',
    comments: 3,
    image: 'grandeur-blog2',
  },
  {
    title: 'Sustainable Hospitality: Our Green Initiatives',
    excerpt:
      'We are committed to reducing our carbon footprint while maintaining the highest standards of luxury and guest satisfaction.',
    category: 'Travel',
    date: '25 Sep, 2026',
    comments: 1,
    image: 'grandeur-blog3',
  },
]

export function BlogPosts() {
  return (
    <section id="blog" className="bg-light-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand">
            Our Blog Posts
          </p>
          <h2 className="mb-6 font-heading text-3xl font-bold text-ink md:text-4xl">
            Our Blog Posts
          </h2>
          <p className="text-base leading-relaxed text-body">
            Stay updated with our latest news, travel tips, and insights into the world of luxury
            hospitality.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.image}/600/400`}
                alt={post.title}
                className="h-48 w-full rounded-t object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-block rounded bg-brand px-3 py-1 text-xs font-medium uppercase text-white">
                    {post.category}
                  </span>
                  <div className="flex gap-3 text-xs text-body">
                    <span>{post.date}</span>
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
                <h4 className="mb-2 font-heading text-lg font-semibold text-ink">
                  <a href="#" className="hover:text-brand">
                    {post.title}
                  </a>
                </h4>
                <p className="text-sm leading-relaxed text-body">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
