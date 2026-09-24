const TRENDING_POSTS = [
  {
    id: 1,
    title: 'Building On Consumer Preferences Shaped By The Pandemic',
    image: 'https://picsum.photos/seed/headliner-1/400/250',
  },
  {
    id: 2,
    title: 'Calling Time On Irresponsible Junk Food Advertising To Children',
    image: 'https://picsum.photos/seed/headliner-2/400/250',
  },
  {
    id: 3,
    title: 'The Pomelo Case: Scope Of Plant Variety Rights In China',
    image: 'https://picsum.photos/seed/headliner-3/400/250',
  },
  {
    id: 4,
    title: 'Valuable Lessons To Take Away From COVID-19',
    image: 'https://picsum.photos/seed/headliner-4/400/250',
  },
] as const

export function TrendingGrid() {
  return (
    <section aria-label="Trending articles" className="py-8">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRENDING_POSTS.map((post) => (
            <article key={post.id} className="group">
              <a href="#" className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-brand">
                Trending
              </p>
              <h2 className="mt-2 text-base font-semibold leading-snug text-ink group-hover:text-accent transition-colors">
                <a href="#">{post.title}</a>
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
