const news = [
  {
    title: 'Essential Engine Maintenance Tips',
    excerpt:
      'Regular maintenance keeps your engine running smoothly. Learn the key checks every car owner should perform.',
    date: 'March 15, 2024',
    author: 'Alex Rivera',
    image: 'https://picsum.photos/seed/veloce-news1/600/400',
  },
  {
    title: 'Choosing the Right Oil for Your Car',
    excerpt:
      'Not all oils are equal. Discover which type best suits your vehicle and driving conditions.',
    date: 'March 10, 2024',
    author: 'Maria Chen',
    image: 'https://picsum.photos/seed/veloce-news2/600/400',
  },
  {
    title: 'Signs Your Brakes Need Attention',
    excerpt:
      'Strange noises, soft pedal, or pulling to one side? These are warning signs you should not ignore.',
    date: 'March 5, 2024',
    author: 'James Park',
    image: 'https://picsum.photos/seed/veloce-news3/600/400',
  },
] as const

export function LatestNews() {
  return (
    <section className="bg-mist py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-ink">Latest News</h2>
          <p className="mt-3 text-smoke">
            Stay updated with automotive tips and industry insights.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-sm bg-white shadow-sm">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-sm bg-primary-400 px-3 py-1 text-xs font-semibold text-white">
                  By {item.author} on {item.date}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{item.excerpt}</p>
                <a
                  href="#news"
                  className="mt-4 inline-block text-sm font-semibold text-primary-400 transition-colors hover:text-primary-500"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
