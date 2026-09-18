const posts = [
  {
    title: 'Openning Branches',
    author: 'Noah Henderson',
    date: '02',
    month: 'Mar',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/bazaar-blog1/600/400',
  },
  {
    title: 'Openning Branches',
    author: 'Noah Henderson',
    date: '02',
    month: 'Mar',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/bazaar-blog2/600/400',
  },
  {
    title: 'Openning Branches',
    author: 'Noah Henderson',
    date: '02',
    month: 'Mar',
    excerpt:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image: 'https://picsum.photos/seed/bazaar-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section className="py-16" id="blog" aria-label="Blog">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-ink">Recent Blog</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Even the all-powerful Pointing has no control about the blind texts it is an almost
            unorthographic life One day however a small line of blind text by the name
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group">
              <a href="#" className="mb-4 block overflow-hidden rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                />
              </a>
              <div className="flex items-center gap-2 text-xs text-mist">
                <span className="font-bold text-brand">{post.date}</span>
                <span>{post.month}</span>
              </div>
              <p className="mt-1 text-xs text-mist">
                Posted by: <span className="text-body">{post.author}</span>
              </p>
              <h3 className="mt-2 text-lg font-bold text-ink">
                <a href="#" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </h3>
              <p className="mt-2 text-sm text-mist">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
