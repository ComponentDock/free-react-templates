const posts = [
  {
    title: '8 Romantic Gifts to Celebrate Your Wedding Anniversary',
    excerpt: 'Flowers have a language all their own. In Victorian times, receiving a…',
    date: 'MAY 22, 2020',
    category: 'Trend news',
    seed: 'petal-blog1',
  },
  {
    title: 'Red Rose - Flower of love of Greek Mythology',
    excerpt: 'Flowers have a language all their own. In Victorian times, receiving a…',
    date: 'MAY 22, 2020',
    category: 'Tips & Idea',
    seed: 'petal-blog2',
  },
  {
    title: 'Beautiful Mandalas Made From Flowers by Kathy Klein',
    excerpt: 'Flowers have a language all their own. In Victorian times, receiving a…',
    date: 'MAY 22, 2020',
    category: 'DIY & Crafts',
    seed: 'petal-blog3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-rose-400">
              Latest posts
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Florist tricks</h2>
          </div>
          <a
            href="#blog"
            className="border-2 border-rose-400 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-rose-400 transition-colors hover:bg-rose-400 hover:text-white"
          >
            View all posts
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/400/260`}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="mb-2 inline-block rounded bg-rose-50 px-3 py-1 text-xs font-medium text-rose-400">
                  {post.category}
                </span>
                <h4 className="mb-2 text-base font-bold text-gray-900 leading-snug">
                  <a href="#blog" className="hover:text-rose-400 transition-colors">
                    {post.title}
                  </a>
                </h4>
                <p className="mb-3 text-sm text-gray-500">{post.excerpt}</p>
                <time className="text-xs font-medium uppercase text-gray-400">{post.date}</time>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
