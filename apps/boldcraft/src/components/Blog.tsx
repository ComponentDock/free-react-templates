const posts = [
  {
    img: 'https://picsum.photos/seed/boldcraft-blog-1/600/400',
    category: 'Design',
    date: 'Sep 12, 2026',
    author: 'Marcus Cole',
    title: 'The Future of Design Systems in 2026',
  },
  {
    img: 'https://picsum.photos/seed/boldcraft-blog-2/600/400',
    category: 'UX',
    date: 'Sep 5, 2026',
    author: 'Marcus Cole',
    title: 'Why User Research Should Drive Every Decision',
  },
  {
    img: 'https://picsum.photos/seed/boldcraft-blog-3/600/400',
    category: 'Strategy',
    date: 'Aug 28, 2026',
    author: 'Marcus Cole',
    title: 'Building Brands That Last: A Strategic Approach',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold text-text-primary">
          Latest News
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-[200px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mb-2">
                <span className="inline-block rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  {p.category}
                </span>
              </div>
              <div className="mb-2 flex items-center gap-2 text-xs text-text-muted">
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.author}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-brand">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
