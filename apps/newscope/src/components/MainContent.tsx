import { cn } from '@free-react-templates/ui'

const featured = {
  title: 'Breaking: Major Climate Summit Reaches Historic Agreement',
  category: 'News',
  author: 'Sarah Mitchell',
  date: 'Sep 13, 2026',
  image: 'https://picsum.photos/seed/ns-main/800/500',
}

const sideArticles = [
  {
    title: 'Stock Markets Rally on Positive Economic Data',
    category: 'Finance',
    author: 'James Park',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/ns-side1/400/250',
    color: 'bg-brand-teal',
  },
  {
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    category: 'Health',
    author: 'Lisa Chen',
    date: 'Sep 11, 2026',
    image: 'https://picsum.photos/seed/ns-side2/400/250',
    color: 'bg-brand-green',
  },
  {
    title: 'City Council Approves New Park Development',
    category: 'Local',
    author: 'Mark Davis',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/ns-side3/400/250',
    color: 'bg-brand-orange',
  },
]

export function MainContent() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured article */}
          <article className="group relative cursor-pointer overflow-hidden rounded-sm">
            <div
              className="h-80 bg-cover bg-center transition-transform group-hover:scale-105 lg:h-full"
              style={{ backgroundImage: `url(${featured.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <span className="mb-2 inline-block rounded-full bg-brand-pink px-3 py-0.5 font-ui text-xs font-bold text-white">
                {featured.category}
              </span>
              <h3 className="mb-2 font-body text-xl font-bold leading-tight text-white lg:text-2xl">
                {featured.title}
              </h3>
              <div className="flex items-center gap-2 font-ui text-xs text-white/80">
                <span>{featured.author}</span>
                <span>·</span>
                <time>{featured.date}</time>
              </div>
            </div>
          </article>

          {/* Side articles */}
          <div className="flex flex-col gap-4">
            {sideArticles.map((article) => (
              <article
                key={article.title}
                className="group relative cursor-pointer overflow-hidden rounded-sm"
              >
                <div
                  className="h-40 bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{ backgroundImage: `url(${article.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span
                    className={cn(
                      'mb-1 inline-block rounded-full px-3 py-0.5 font-ui text-xs font-bold text-white',
                      article.color,
                    )}
                  >
                    {article.category}
                  </span>
                  <h3 className="mb-1 font-body text-sm font-bold leading-tight text-white">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 font-ui text-xs text-white/80">
                    <span>{article.author}</span>
                    <span>·</span>
                    <time>{article.date}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
