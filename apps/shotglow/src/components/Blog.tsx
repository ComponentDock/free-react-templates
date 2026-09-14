const posts = [
  {
    image: 'https://picsum.photos/seed/shotglow-blog1/800/500',
    author: 'Michal',
    date: 'March 30, 2024',
    title: "Mad Whales Gathering Open Can't",
    excerpt:
      "Is life form dominion under very seasons together them divide so, she's bearing sixth.",
  },
  {
    image: 'https://picsum.photos/seed/shotglow-blog2/800/500',
    author: 'Michal',
    date: 'March 30, 2024',
    title: 'Creepeth Grass Brought Over Man',
    excerpt:
      "Is life form dominion under very seasons together them divide so, she's bearing sixth.",
  },
  {
    image: 'https://picsum.photos/seed/shotglow-blog3/800/500',
    author: 'Michal',
    date: 'March 30, 2024',
    title: 'Mad Whales Gathering Open Evening',
    excerpt:
      "Is life form dominion under very seasons together them divide so, she's bearing sixth.",
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 max-w-xl">
          <p className="mb-2 font-heading text-sm font-medium uppercase tracking-widest text-slate-900">
            Our blog
          </p>
          <h2 className="font-heading text-4xl font-semibold uppercase text-gray-200 sm:text-5xl">
            Latest Story
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ image, author, date, title, excerpt }) => (
            <article key={title} className="group">
              <div className="mb-5 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <p className="mb-2 text-xs text-gray-400">
                By <span className="text-slate-900">{author}</span> / {date}
              </p>
              <a href="#" className="block">
                <h3 className="mb-3 font-heading text-xl font-semibold text-slate-900 transition-colors hover:text-gray-400">
                  {title}
                </h3>
              </a>
              <p className="text-sm leading-relaxed text-gray-400">{excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
