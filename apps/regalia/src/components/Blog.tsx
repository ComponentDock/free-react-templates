const POSTS = [
  {
    image: 'https://picsum.photos/seed/regalia-blog1/600/400',
    title: 'Top 10 Hidden Gems in the City',
    date: 'Sep 15, 2026',
  },
  {
    image: 'https://picsum.photos/seed/regalia-blog2/600/400',
    title: 'A Guide to Fine Dining',
    date: 'Sep 10, 2026',
  },
  {
    image: 'https://picsum.photos/seed/regalia-blog3/600/400',
    title: 'Wellness Retreats Guide',
    date: 'Sep 5, 2026',
  },
]

export function Blog() {
  return (
    <section className="bg-white py-20" aria-label="Blog">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-semibold text-text-heading">
            Latest News
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Stay updated with our latest stories and travel tips
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <span className="mb-2 block text-xs uppercase tracking-wider text-accent-gold">
                {post.date}
              </span>
              <h3 className="font-heading text-lg font-semibold text-text-heading group-hover:text-brand-green">
                {post.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
