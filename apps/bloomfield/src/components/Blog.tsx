const posts = [
  {
    title: '8 Romantic Gifts to Celebrate Your Wedding Anniversary',
    tag: 'Trend news',
    date: 'MAY 22, 2020',
    image: 'https://picsum.photos/seed/bloomfield-blog1/600/400',
  },
  {
    title: 'Red Rose - Flower of love of Greek Mythology',
    tag: 'Tips & Idea',
    date: 'MAY 22, 2020',
    image: 'https://picsum.photos/seed/bloomfield-blog2/600/400',
  },
  {
    title: 'Beautiful Mandalas Made From Flowers by Kathy Klein',
    tag: 'DIY & Crafts',
    date: 'MAY 22, 2020',
    image: 'https://picsum.photos/seed/bloomfield-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="mb-2 block text-sm font-bold uppercase tracking-[4px] text-bloom-400">
              Latest posts
            </span>
            <h2
              className="text-3xl font-normal text-gray-900 sm:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Bloomfield tricks
            </h2>
          </div>
          <a
            href="#"
            className="inline-block rounded-full border-2 border-bloom-400 px-8 py-3 text-sm font-bold uppercase tracking-widest text-bloom-400 transition-colors hover:bg-bloom-400 hover:text-white"
          >
            View all posts
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-xl">
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-5">
                <span className="mb-2 inline-block rounded-full bg-bloom-50 px-3 py-1 text-xs font-bold text-bloom-400">
                  {post.tag}
                </span>
                <h4
                  className="mb-2 text-lg font-bold leading-snug text-gray-900"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <a href="#" className="transition-colors hover:text-bloom-400">
                    {post.title}
                  </a>
                </h4>
                <p className="mb-3 text-sm leading-relaxed text-gray-500">
                  Flowers have a language all their own. In Victorian times, receiving a…
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
