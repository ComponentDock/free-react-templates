import { ArrowRight } from 'lucide-react'

const articles = [
  {
    image: 'https://picsum.photos/seed/pandemic-news1/600/400',
    title: 'Global Vaccination Efforts Accelerate',
    excerpt:
      'Countries around the world are ramping up their vaccination campaigns to protect citizens and slow the spread.',
  },
  {
    image: 'https://picsum.photos/seed/pandemic-news2/600/400',
    title: 'New Prevention Guidelines Released',
    excerpt:
      'Health authorities have updated their guidelines with the latest evidence-based recommendations for staying safe.',
  },
  {
    image: 'https://picsum.photos/seed/pandemic-news3/600/400',
    title: 'Community Support Programs Expand',
    excerpt:
      'Local organizations are stepping up to provide support for those most affected by the pandemic.',
  },
]

export function News() {
  return (
    <section id="news" className="bg-brand-lighter py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-black text-brand">News &amp; Articles</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          Stay informed with the latest news, research, and updates.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{article.title}</h3>
                <p className="mt-2 text-sm text-mist">{article.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand transition-colors hover:text-brand-dark"
                >
                  Read more <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
