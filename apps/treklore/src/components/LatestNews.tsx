const news = [
  {
    title: '10 Hidden Gems in Southeast Asia',
    excerpt:
      'Discover the lesser-known destinations that will make your next adventure truly unique and unforgettable.',
    image: 'https://picsum.photos/seed/treklore-news1/600/400',
    day: '12',
    month: 'Jun',
    category: 'lifestyle & travel',
  },
  {
    title: 'How to Pack Light for Any Trip',
    excerpt:
      'Master the art of minimalist packing with these expert tips and travel-smart essentials.',
    image: 'https://picsum.photos/seed/treklore-news2/600/400',
    day: '08',
    month: 'Jun',
    category: 'lifestyle & travel',
  },
  {
    title: 'The Ultimate Guide to Solo Travel',
    excerpt:
      'Everything you need to know about embarking on your first solo journey with confidence.',
    image: 'https://picsum.photos/seed/treklore-news3/600/400',
    day: '05',
    month: 'Jun',
    category: 'lifestyle & travel',
  },
]

export function LatestNews() {
  return (
    <section aria-label="Latest news" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
            curated experiences
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-wide text-navy">
            Latest News
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* News posts */}
          <div className="space-y-8 lg:col-span-8">
            {news.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col gap-6 overflow-hidden rounded bg-white shadow-md sm:flex-row"
              >
                <div className="relative h-48 overflow-hidden sm:h-auto sm:w-48 sm:flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex flex-col items-center rounded bg-navy px-3 py-1.5 text-center">
                    <span className="font-display text-xl font-bold leading-none text-white">
                      {post.day}
                    </span>
                    <span className="text-[10px] uppercase text-white/70">{post.month}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-4">
                  <span className="mb-2 text-xs font-medium uppercase tracking-wider text-brand-blue">
                    {post.category}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy transition hover:text-brand-blue">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar promo */}
          <aside className="lg:col-span-4">
            <div
              className="relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden rounded p-8 text-center"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/treklore-promo/600/600)' }}
            >
              <div className="absolute inset-0 bg-navy/70" />
              <div className="relative z-10">
                <span className="mb-2 block font-display text-sm font-semibold uppercase tracking-widest text-brand-blue">
                  Limited Time
                </span>
                <h3 className="mb-4 font-display text-3xl font-bold uppercase text-white">
                  Get a 20% Discount
                </h3>
                <p className="mb-6 text-sm text-white/70">
                  Book your dream vacation online today and save big.
                </p>
                <a
                  href="#"
                  className="inline-block rounded bg-brand-blue px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-brand-hover"
                >
                  Buy Your Vacation Online Now
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
