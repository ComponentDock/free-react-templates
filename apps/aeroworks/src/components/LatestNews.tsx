const posts = [
  {
    title: 'Top 10 Cars for Family Road Trips',
    excerpt: 'Discover the best vehicles for long-distance family travel with comfort and safety.',
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/aeroworks-blog-1/600/400',
  },
  {
    title: 'Electric vs Hybrid: Which Is Right for You?',
    excerpt: 'A comprehensive comparison to help you choose the best eco-friendly option.',
    date: 'Sep 8, 2026',
    image: 'https://picsum.photos/seed/aeroworks-blog-2/600/400',
  },
  {
    title: 'Car Maintenance Tips for Winter',
    excerpt: 'Keep your vehicle in top shape during the cold months with these essential tips.',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/aeroworks-blog-3/600/400',
  },
]

export function LatestNews() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark">Latest News Updates</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="group block overflow-hidden rounded-[2px] border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 block text-xs font-semibold text-text-muted">
                  {post.date}
                </span>
                <h3 className="mb-2 text-lg font-bold text-text-dark transition-colors group-hover:text-primary-500">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-medium">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
