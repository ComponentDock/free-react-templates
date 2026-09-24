const articles = [
  {
    date: 'September 22, 2026',
    category: 'Technology',
    title: 'Apple Unveils Next-Generation MacBook Pro with M5 Chip',
  },
  {
    date: 'September 21, 2026',
    category: 'Business',
    title: 'Global Supply Chain Improvements Drive Down Consumer Prices',
  },
  {
    date: 'September 20, 2026',
    category: 'Health',
    title: 'Breakthrough Gene Therapy Shows Promise for Rare Diseases',
  },
  {
    date: 'September 19, 2026',
    category: 'Entertainment',
    title: 'Streaming Wars Heat Up as New Platform Launches Exclusive Content',
  },
]

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  )
}

export function WeeklyTopNews2() {
  return (
    <section className="bg-section-gray py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-heading">
          Weekly Top News
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={article.title} className="rounded bg-white p-4 shadow-sm">
              <time className="text-xs text-body" dateTime={article.date}>
                {article.date}
              </time>
              <div className="mt-2">
                <Badge label={article.category} />
              </div>
              <h3 className="mt-2 text-sm font-bold leading-snug text-heading">{article.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
