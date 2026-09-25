const POSTS = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'January 29, 2019',
    image: 'draftly-blog-1',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'January 29, 2019',
    image: 'draftly-blog-2',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: 'Why Lead Generation is Key for Business Growth',
    date: 'January 29, 2019',
    image: 'draftly-blog-3',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-light uppercase tracking-widest text-brand-500">
            News &amp; Update
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Blog</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <div key={i} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${post.image}/600/400`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <span className="mb-1 block text-xs text-gray-400">{post.date}</span>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                <a href="#" className="transition-colors hover:text-brand-500">
                  {post.title}
                </a>
              </h3>
              <p className="text-sm text-gray-500">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
