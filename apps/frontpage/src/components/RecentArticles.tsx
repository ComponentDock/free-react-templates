const articles = [
  {
    category: 'Technology',
    title: '5G Networks Expand Coverage to Rural Communities Nationwide',
    image: 'https://picsum.photos/seed/frontpage-recent1/400/300',
  },
  {
    category: 'Lifestyle',
    title: 'The Best Indoor Plants for Improving Air Quality at Home',
    image: 'https://picsum.photos/seed/frontpage-recent2/400/300',
  },
  {
    category: 'Fashion',
    title: 'Circular Fashion: How Brands Are Embracing Zero Waste',
    image: 'https://picsum.photos/seed/frontpage-recent3/400/300',
  },
  {
    category: 'Travel',
    title: 'Road Trip Essentials: The Ultimate Packing Checklist',
    image: 'https://picsum.photos/seed/frontpage-recent4/400/300',
  },
]

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  )
}

export function RecentArticles() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-heading">
          Recent Articles
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <article key={article.title} className="group">
              <img
                src={article.image}
                alt={article.title}
                className="aspect-[4/3] w-full rounded object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="mt-3">
                <Badge label={article.category} />
                <h3 className="mt-2 text-sm font-bold leading-snug text-heading">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
