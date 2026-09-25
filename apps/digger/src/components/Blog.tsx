const posts = [
  {
    title: 'How to Choose the Right Mining Equipment',
    date: 'March 15, 2024',
    author: 'James Wilson',
    excerpt:
      'Selecting the right equipment is crucial for mining operations. Learn about the key factors to consider when making your purchase decision.',
    image: 'https://picsum.photos/seed/digger-blog1/600/400',
  },
  {
    title: 'Sustainable Mining Practices for the Future',
    date: 'March 10, 2024',
    author: 'Sarah Chen',
    excerpt:
      'Environmental responsibility is at the heart of modern mining. Discover how innovative practices are shaping the industry.',
    image: 'https://picsum.photos/seed/digger-blog2/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center text-heading mb-16">
          Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.title}>
              <img
                src={post.image}
                alt={post.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-heading mb-2">{post.title}</h3>
              <p className="text-xs text-secondary uppercase mb-2">
                {post.date} · By {post.author}
              </p>
              <p className="text-body text-sm leading-relaxed mb-3">{post.excerpt}</p>
              <a
                href="#"
                className="text-brand text-sm font-semibold hover:text-brand-dark transition-colors"
              >
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
