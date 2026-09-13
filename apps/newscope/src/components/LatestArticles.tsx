import { cn } from '@free-react-templates/ui'

const articles = [
  {
    title: 'The Future of Remote Work: Trends to Watch',
    category: 'Life Style',
    author: 'Emma Watson',
    date: 'Sep 12, 2026',
    image: 'https://picsum.photos/seed/ns-latest1/400/280',
    color: 'bg-brand-green',
  },
  {
    title: 'How to Build a Sustainable Wardrobe',
    category: 'Fashion',
    author: 'Maria Garcia',
    date: 'Sep 11, 2026',
    image: 'https://picsum.photos/seed/ns-latest2/400/280',
    color: 'bg-brand-pink',
  },
  {
    title: 'Cybersecurity Tips for Small Businesses',
    category: 'Technology',
    author: 'David Kim',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/ns-latest3/400/280',
    color: 'bg-brand-teal',
  },
  {
    title: 'Weekend Getaways Near Major Cities',
    category: 'Travel',
    author: 'Rachel Adams',
    date: 'Sep 9, 2026',
    image: 'https://picsum.photos/seed/ns-latest4/400/280',
    color: 'bg-brand-green',
  },
  {
    title: 'New Restaurant Openings This Season',
    category: 'Life Style',
    author: 'Jake Turner',
    date: 'Sep 8, 2026',
    image: 'https://picsum.photos/seed/ns-latest5/400/280',
    color: 'bg-brand-orange',
  },
  {
    title: 'Smartphone Camera Comparison 2026',
    category: 'Technology',
    author: 'Chris Wong',
    date: 'Sep 7, 2026',
    image: 'https://picsum.photos/seed/ns-latest6/400/280',
    color: 'bg-brand-teal',
  },
]

export function LatestArticles() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 font-body text-2xl font-bold text-text-dark">Latest Articles</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title} className="group cursor-pointer">
              <div className="relative mb-3 h-48 overflow-hidden rounded-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span
                  className={cn(
                    'absolute left-3 bottom-12 rounded-full px-3 py-0.5 font-ui text-xs font-bold text-white',
                    article.color,
                  )}
                >
                  {article.category}
                </span>
                <h3 className="absolute bottom-3 left-3 right-3 font-body text-sm font-bold leading-tight text-white">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-1 font-ui text-xs text-text-light">
                <span>{article.author}</span>
                <span>·</span>
                <time>{article.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
