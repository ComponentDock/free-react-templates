const posts = [
  {
    title: 'Bitcoin Reaches New All-Time High',
    excerpt:
      'Bitcoin has surpassed its previous record, driven by institutional adoption and growing mainstream acceptance.',
    date: '15',
    month: 'Sep',
    image: 'https://picsum.photos/seed/coincast-blog1/400/250',
  },
  {
    title: 'Ethereum 2.0 Launch Date Announced',
    excerpt:
      'The highly anticipated upgrade promises to bring significant improvements to the Ethereum network.',
    date: '12',
    month: 'Sep',
    image: 'https://picsum.photos/seed/coincast-blog2/400/250',
  },
  {
    title: 'DeFi Market Sees Record Growth',
    excerpt:
      'Decentralized finance protocols are experiencing unprecedented growth as more users enter the space.',
    date: '08',
    month: 'Sep',
    image: 'https://picsum.photos/seed/coincast-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Latest News</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-4 top-4 rounded bg-brand px-3 py-1 text-center text-white">
                  <div className="text-lg font-bold leading-none">{p.date}</div>
                  <div className="text-xs uppercase">{p.month}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-mist">{p.excerpt}</p>
                <a
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold uppercase text-brand hover:text-brand-dark"
                >
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
