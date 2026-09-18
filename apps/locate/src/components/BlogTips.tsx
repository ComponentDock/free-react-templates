interface Article {
  title: string
  author: string
  date: string
  excerpt: string
  image: string
}

const articles: Article[] = [
  {
    title: 'Etiquette Tips for Travellers',
    author: 'Jeff Sheldon',
    date: 'May 5, 2024',
    excerpt:
      'Whether you are exploring a new city or visiting a local spot, knowing the right etiquette can enhance your experience.',
    image: 'locate-blog-1',
  },
  {
    title: 'Top 10 Hidden Gems in New York',
    author: 'Maria Santos',
    date: 'Apr 22, 2024',
    excerpt:
      'Beyond the tourist trail, New York hides incredible restaurants, parks, and cultural spots waiting to be discovered.',
    image: 'locate-blog-2',
  },
  {
    title: 'How to Plan the Perfect Weekend Trip',
    author: 'Alex Chen',
    date: 'Apr 10, 2024',
    excerpt:
      'A quick guide to organizing a memorable weekend getaway, from choosing the destination to packing the essentials.',
    image: 'locate-blog-3',
  },
]

export function BlogTips() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary-500">Tips &amp; Articles</h2>
          <p className="text-gray-500">See Our Daily tips &amp; articles</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <img
                src={`https://picsum.photos/seed/${article.image}/600/400`}
                alt={article.title}
                className="mb-4 h-48 w-full rounded object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                <a href="#" className="hover:text-primary-500">
                  {article.title}
                </a>
              </h3>
              <div className="mb-2 text-xs text-gray-400">
                by {article.author} · {article.date}
              </div>
              <p className="text-sm text-gray-500">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
