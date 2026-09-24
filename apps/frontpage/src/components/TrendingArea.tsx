const heroArticle = {
  category: 'Technology',
  title: 'The Future of AI: How Machine Learning is Transforming Industries',
  image: 'https://picsum.photos/seed/frontpage-hero/800/500',
}

const smallCards = [
  {
    category: 'Business',
    title: 'Stock Markets Rally on Positive Economic Data',
    image: 'https://picsum.photos/seed/frontpage-small1/400/300',
  },
  {
    category: 'Health',
    title: 'New Study Reveals Benefits of Mediterranean Diet',
    image: 'https://picsum.photos/seed/frontpage-small2/400/300',
  },
  {
    category: 'Sports',
    title: 'Championship Finals Set for Epic Showdown This Weekend',
    image: 'https://picsum.photos/seed/frontpage-small3/400/300',
  },
]

const sidebarItems = [
  {
    category: 'Politics',
    title: 'Senate Passes New Infrastructure Bill After Months of Debate',
    image: 'https://picsum.photos/seed/frontpage-side1/120/80',
  },
  {
    category: 'Entertainment',
    title: 'Award-Winning Director Announces Surprise New Film Project',
    image: 'https://picsum.photos/seed/frontpage-side2/120/80',
  },
  {
    category: 'Science',
    title: 'NASA Confirms Water Discovery on Distant Exoplanet',
    image: 'https://picsum.photos/seed/frontpage-side3/120/80',
  },
  {
    category: 'Travel',
    title: 'Hidden Gems: 10 Underrated Destinations for 2026',
    image: 'https://picsum.photos/seed/frontpage-side4/120/80',
  },
  {
    category: 'Lifestyle',
    title: 'Minimalist Living: How to Declutter Your Life This Spring',
    image: 'https://picsum.photos/seed/frontpage-side5/120/80',
  },
]

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-brand px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
      {label}
    </span>
  )
}

export function TrendingArea() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-heading">Trending</h2>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            {/* Hero card */}
            <article className="group relative overflow-hidden rounded">
              <img
                src={heroArticle.image}
                alt={heroArticle.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <Badge label={heroArticle.category} />
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  {heroArticle.title}
                </h3>
              </div>
            </article>

            {/* Small cards grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {smallCards.map((card) => (
                <article key={card.title} className="group">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full rounded object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="mt-3">
                    <Badge label={card.category} />
                    <h4 className="mt-1 text-sm font-bold leading-snug text-heading">
                      {card.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {sidebarItems.map((item) => (
              <article key={item.title} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 flex-shrink-0 rounded object-cover"
                  loading="lazy"
                />
                <div>
                  <Badge label={item.category} />
                  <h4 className="mt-1 text-sm font-bold leading-snug text-heading">{item.title}</h4>
                </div>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
