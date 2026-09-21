const articles = [
  {
    title: "Sony's New Releases for 2025",
    date: 'July 12, 2025',
    comments: 2,
    excerpt:
      'The latest lineup from Sony promises groundbreaking experiences. From exclusive titles to innovative hardware, here is what to expect.',
    image: 'https://picsum.photos/seed/joystick-art1/400/300',
  },
  {
    title: '10 Tips to Be a Better Gamer',
    date: 'July 10, 2025',
    comments: 5,
    excerpt:
      'Whether you are a casual player or competitive enthusiast, these tips will help sharpen your skills and elevate your gameplay.',
    image: 'https://picsum.photos/seed/joystick-art2/400/300',
  },
  {
    title: 'Microsoft Has Some New Tips',
    date: 'July 8, 2025',
    comments: 3,
    excerpt:
      'Microsoft shares insights on optimizing your gaming setup and getting the most out of Xbox Game Pass.',
    image: 'https://picsum.photos/seed/joystick-art3/400/300',
  },
]

export function LatestArticles() {
  return (
    <section className="py-20 bg-dark" aria-label="Latest Articles">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Articles list */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="space-y-6">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="flex flex-col sm:flex-row gap-5 bg-darker/50 rounded p-4"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full sm:w-48 h-32 object-cover rounded flex-shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <a
                      href="#"
                      className="text-white font-bold text-lg hover:text-primary-400 transition-colors"
                    >
                      {article.title}
                    </a>
                    <div className="flex items-center gap-4 mt-1 text-xs text-smoke">
                      <span>{article.date}</span>
                      <span>{article.comments} Comments</span>
                    </div>
                    <p className="text-smoke text-sm mt-2 leading-relaxed">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-white mb-8">This week&apos;s deal</h2>
            <div className="bg-darker/50 rounded p-6">
              <img
                src="https://picsum.photos/seed/joystick-deal/400/500"
                alt="Weekly gaming deal"
                className="w-full rounded object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
