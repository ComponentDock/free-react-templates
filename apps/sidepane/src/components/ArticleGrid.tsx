const articles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: "How the gut microbes you're born with affect your lifelong health",
  date: 'Posted: Dec 17, 2019',
  seed: `sidepane-article-${i + 1}`,
}))

export default function ArticleGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {articles.map((article) => (
        <article key={article.id} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
          <img
            src={`https://picsum.photos/seed/${article.seed}/80/80`}
            alt={article.title}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col justify-center min-w-0">
            <h3 className="text-sm font-semibold text-text-primary leading-snug mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-xs text-text-secondary">{article.date}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
