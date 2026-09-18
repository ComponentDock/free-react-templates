const articles = [
  {
    author: 'James Watson',
    image: 'https://picsum.photos/seed/plumb-news1/80/80',
    heading: 'Far far away, behind the word Mountain',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    author: 'Carl Anderson',
    image: 'https://picsum.photos/seed/plumb-news2/80/80',
    heading: 'Far far away, behind the word Mountain',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    author: 'Michelle Allison',
    image: 'https://picsum.photos/seed/plumb-news3/80/80',
    heading: 'Far far away, behind the word Mountain',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function News() {
  return (
    <section id="news" aria-label="News" className="bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-white">
          On The News
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.author} className="rounded-lg bg-gray-800 p-6">
              <img
                src={article.image}
                alt={`Photo of ${article.author}`}
                className="h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-xs text-primary-400">by {article.author}</p>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                <a href="#" className="transition-colors hover:text-primary-400">
                  {article.heading}
                </a>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">{article.excerpt}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-300"
              >
                Read more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
