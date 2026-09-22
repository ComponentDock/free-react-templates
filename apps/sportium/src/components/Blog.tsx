const posts = [
  {
    title: 'Tips for the perfect body',
    date: 'June 29, 2018',
    description:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
    image: 'https://picsum.photos/seed/sportium-blog1/400/250',
  },
  {
    title: 'Tips for the perfect body',
    date: 'June 29, 2018',
    description:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
    image: 'https://picsum.photos/seed/sportium-blog2/400/250',
  },
  {
    title: 'Video: Pilates for Beginners',
    date: 'June 29, 2018',
    description:
      'Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque sit amet tellus blandit.',
    image: 'https://picsum.photos/seed/sportium-blog3/400/250',
  },
]

export function Blog() {
  return (
    <section
      id="blog"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url('https://picsum.photos/seed/sportium-blog-bg/1920/800')` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-300">
              welcome to sportium
            </p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">The Blog</h2>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-white/80 underline-offset-4 hover:text-brand-400 hover:underline"
          >
            View all blog posts
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="overflow-hidden rounded-lg bg-white">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-heading">
                  <a href="#" className="hover:text-brand-400">
                    {post.title}
                  </a>
                </h3>
                <p className="mb-3 text-xs text-muted">
                  <a href="#" className="hover:text-brand-400">
                    {post.date}
                  </a>
                </p>
                <p className="mb-3 text-sm leading-relaxed text-body">{post.description}</p>
                <a href="#" className="text-sm font-semibold text-brand-400 hover:text-brand-500">
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
