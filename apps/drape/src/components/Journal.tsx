const articles = [
  {
    date: '12 August 2026',
    category: 'Style',
    title: 'The white shirt that goes with everything',
    excerpt:
      'One shirt, six ways. How a single well-cut white shirt quietly does most of the work in a considered wardrobe.',
    seed: 'drape-blog1',
  },
  {
    date: '28 July 2026',
    category: 'Guides',
    title: 'How to build a capsule wardrobe that lasts',
    excerpt:
      'Fewer, better pieces. A practical method for cutting a wardrobe down to the things you actually reach for.',
    seed: 'drape-blog2',
  },
  {
    date: '9 July 2026',
    category: 'Care',
    title: 'Caring for natural fibres so they last a decade',
    excerpt:
      'Wool, linen and cotton all want different things. A short guide to washing, drying and storing them properly.',
    seed: 'drape-blog3',
  },
]

export function Journal() {
  return (
    <section className="py-16 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Journal</h2>
          <a
            href="#blog"
            className="text-sm font-medium border border-warm-900 px-5 py-2 hover:bg-warm-900 hover:text-white transition-colors"
          >
            All posts
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article key={a.title}>
              <a href="#blog" className="block overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${a.seed}/900/600`}
                  alt={a.title}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </a>
              <div className="mt-3">
                <p className="text-xs text-warm-400">
                  {a.date} &middot; {a.category}
                </p>
                <h3 className="text-base font-bold mt-1">
                  <a href="#blog" className="hover:text-terra-400 transition-colors">
                    {a.title}
                  </a>
                </h3>
                <p className="text-sm text-warm-500 mt-1">{a.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
