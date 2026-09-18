const posts = [
  {
    title: 'How to Ace Your Next Job Interview',
    date: 'Sep 15, 2026',
    category: 'Career Tips',
    image: 'https://picsum.photos/seed/civicore-news1/400/250',
  },
  {
    title: 'Top Skills Employers Are Looking For in 2026',
    date: 'Sep 10, 2026',
    category: 'Industry',
    image: 'https://picsum.photos/seed/civicore-news2/400/250',
  },
  {
    title: 'Remote Work: Tips for Staying Productive',
    date: 'Sep 5, 2026',
    category: 'Lifestyle',
    image: 'https://picsum.photos/seed/civicore-news3/400/250',
  },
]

export function News() {
  return (
    <section id="news" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Latest News</h2>
          <p className="mx-auto mt-4 max-w-2xl text-mist">
            Stay informed with the latest career advice, industry trends, and job market insights.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[3px] bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-mist">
                  <time>{post.date}</time>
                  <span className="rounded bg-brand/10 px-2 py-1 text-brand">{post.category}</span>
                </div>
                <a
                  href="#news"
                  className="mt-3 block font-display text-lg font-bold text-ink hover:text-brand"
                >
                  {post.title}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
