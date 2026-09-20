const posts = [
  {
    title: 'The Benefits of Play-Based Learning',
    date: 'September 10, 2026',
    excerpt:
      'Discover why play-based learning is the most effective approach for early childhood education and how it develops critical thinking skills.',
    image: 'https://picsum.photos/seed/tadpole-blog1/400/250',
  },
  {
    title: 'Preparing Your Child for Their First Day',
    date: 'September 5, 2026',
    excerpt:
      'Tips and strategies to make the transition to kindergarten smooth and enjoyable for both parents and children.',
    image: 'https://picsum.photos/seed/tadpole-blog2/400/250',
  },
  {
    title: 'Creative Art Projects for Toddlers',
    date: 'August 28, 2026',
    excerpt:
      'Fun and easy art activities that help develop fine motor skills, color recognition, and self-expression in young children.',
    image: 'https://picsum.photos/seed/tadpole-blog3/400/250',
  },
] as const

export function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center font-display text-lg font-semibold text-brand-pink">
          Latest News
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold text-brand-dark sm:text-4xl">
          From Our Blog
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ title, date, excerpt, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-xl bg-brand-light transition-shadow hover:shadow-lg"
            >
              <img
                src={image}
                alt={`Blog post: ${title}`}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <p className="text-xs text-brand-pink font-semibold uppercase">{date}</p>
                <h3 className="mt-2 text-lg font-bold text-brand-dark">{title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{excerpt}</p>
                <a
                  href="#blog"
                  className="mt-4 inline-block text-sm font-bold text-brand-pink hover:text-pink-600 transition-colors"
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
