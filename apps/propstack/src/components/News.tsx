const POSTS = [
  {
    image: 'https://picsum.photos/seed/news1/600/400',
    date: 'Jan 15, 2026',
    title: 'Top 10 Neighborhoods to Buy in 2026',
    excerpt:
      'Discover the most promising neighborhoods for your next real estate investment this year.',
  },
  {
    image: 'https://picsum.photos/seed/news2/600/400',
    date: 'Feb 3, 2026',
    title: 'First-Time Buyer Guide',
    excerpt:
      'Everything you need to know about purchasing your first home, from financing to closing.',
  },
  {
    image: 'https://picsum.photos/seed/news3/600/400',
    date: 'Mar 10, 2026',
    title: 'Market Trends This Spring',
    excerpt:
      'A look at the latest real estate market trends and what they mean for buyers and sellers.',
  },
]

export function News() {
  return (
    <section id="news" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">News</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg border border-gray-100">
              <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="mb-2 text-sm text-gray-400">{post.date}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{post.title}</h3>
                <p className="mb-3 text-sm text-gray-500">{post.excerpt}</p>
                <a href="#" className="text-sm font-semibold text-primary hover:underline">
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
