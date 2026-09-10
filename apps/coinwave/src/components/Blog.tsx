const POSTS = [
  {
    image: 'https://picsum.photos/seed/coinwave-blog1/400/250',
    title: 'Portable Fashion for women',
    description: 'Explore the latest trends in cryptocurrency fashion and wearable tech.',
    author: 'Belle Beck',
    date: 'Jul 14, 2026',
  },
  {
    image: 'https://picsum.photos/seed/coinwave-blog2/400/250',
    title: 'Portable Fashion for women',
    description: 'How Bitcoin is reshaping the way we think about digital payments.',
    author: 'Harriet Barrett',
    date: 'Jul 13, 2026',
  },
  {
    image: 'https://picsum.photos/seed/coinwave-blog3/400/250',
    title: 'Portable Fashion for women',
    description: 'Understanding blockchain technology and its real-world applications.',
    author: 'Fannie Simmons',
    date: 'Jul 12, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-[30px] font-semibold text-dark-bg">Latest Posts from our Blog</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map(({ image, title, description, author, date }) => (
            <article key={author} className="group">
              <div className="mb-6 overflow-hidden rounded-sm">
                <img
                  src={image}
                  alt={title}
                  className="h-[220px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-[18px] font-semibold text-dark-bg">
                <a href="#blog" className="transition-colors hover:text-orange-brand">
                  {title}
                </a>
              </h3>
              <p className="mb-4 text-[15px] font-light leading-7 text-text-muted">{description}</p>
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/40?u=${author}`}
                  alt={author}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-[13px] text-text-muted">
                  {author} · {date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
