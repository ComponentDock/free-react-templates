const posts = [
  {
    date: '20 September 2017',
    author: 'Herman Miller',
    title: 'I like the body. I like to design everything.',
    img: 'structura-blog-1',
  },
  {
    date: '25 March 2017',
    author: 'Herman Miller',
    title: 'MINIMAL & MODULAR YOUR NEXT MODULAR',
    img: 'structura-blog-2',
  },
  {
    date: '20 April 2017',
    author: 'Herman Miller',
    title: 'Graphic Design and Editorial: Drope.',
    img: 'structura-blog-3',
  },
]

export function Blog() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-charcoal">Latest News</h2>
          <p className="mt-3 text-gray-500">
            A wall for our project glory and a place to find more
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded bg-white shadow-sm">
              <img
                src={`https://picsum.photos/seed/${post.img}/600/400`}
                alt={post.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.date}</span>
                  <span>|</span>
                  <span className="uppercase">By {post.author}</span>
                </div>
                <h3 className="mt-3 font-semibold text-charcoal">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  There are many variations of passages of Lorem Ipsum available, the majority have
                  suffered alteration in some form.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
