const articles = [
  {
    image: 'https://picsum.photos/seed/vestly-news1/400/250',
    title: 'New Regulations on the Crypto Market',
    excerpt:
      'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    image: 'https://picsum.photos/seed/vestly-news2/400/250',
    title: 'Good News from the Crypto World',
    excerpt:
      'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
  {
    image: 'https://picsum.photos/seed/vestly-news3/400/250',
    title: 'Bitcoin price goes to the Moon with new laws',
    excerpt:
      'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci.',
  },
] as const

export function News() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            take a look at our
          </div>
          <h2 className="text-3xl font-normal text-heading">Latest News in Crypto</h2>
        </div>

        {/* News grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <div key={article.title} className="group">
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="py-6">
                <h3 className="mb-3 text-sm font-semibold text-heading">{article.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-body-text">{article.excerpt}</p>
                <a
                  href="#"
                  className="text-xs font-semibold uppercase text-heading transition-colors hover:text-brand"
                >
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
