const NEWS_POSTS = [
  {
    date: 'Oct 19, 2024',
    title: 'Music Seminary at Festival',
    excerpt:
      "Join us for an immersive workshop on music production and live performance techniques at this year's festival.",
    imageSeed: 'ampstat-news-1',
    reversed: false,
  },
  {
    date: 'Oct 17, 2024',
    title: 'Festival List for 2025',
    excerpt:
      "Announcing the complete lineup for next year's festival season. Early bird tickets are now available.",
    imageSeed: 'ampstat-news-2',
    reversed: true,
  },
  {
    date: 'Oct 15, 2024',
    title: 'New Album Release in 2025',
    excerpt:
      "Our latest studio album is in production. Here's a sneak peek at what fans can expect.",
    imageSeed: 'ampstat-news-3',
    reversed: false,
  },
] as const

export default function News() {
  return (
    <section data-testid="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-text-dark mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_POSTS.map((post, i) => (
            <article
              key={i}
              data-testid="news-card"
              className={`flex flex-col ${post.reversed ? 'md:flex-col-reverse' : ''}`}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={`https://picsum.photos/seed/${post.imageSeed}/400/250`}
                  alt={post.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="pt-4">
                <a
                  href="#"
                  className="text-brand-green text-sm font-bold hover:text-brand-purple transition-colors"
                >
                  {post.date}
                </a>
                <h3 className="text-xl font-bold text-text-dark mt-2 mb-3">
                  <a href="#" className="hover:text-brand-green transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
