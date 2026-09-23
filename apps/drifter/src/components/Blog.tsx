const posts = [
  {
    date: '25 October, 2017',
    author: 'Mark Wiens',
    title: 'Addiction When Gambling Becomes A Problem',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. As we surf the internet, we are continuously bombarded with...',
    seed: 'drifter-blog-1',
  },
  {
    date: '25 October, 2017',
    author: 'Mark Wiens',
    title: 'Make Your Best Designed Space',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. As we surf the internet, we are continuously bombarded with...',
    seed: 'drifter-blog-2',
  },
  {
    date: '25 October, 2017',
    author: 'Mark Wiens',
    title: 'Playing With Imagination',
    excerpt:
      'Computers have become ubiquitous in almost every facet of our lives. As we surf the internet, we are continuously bombarded with...',
    seed: 'drifter-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center font-heading text-3xl font-bold text-heading">
          Latest Posts from Blog
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-body-muted">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="group overflow-hidden rounded-lg border border-border">
              <div className="overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/600/400`}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-body-muted">
                  {post.date} | By {post.author}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold text-heading transition-colors group-hover:text-brand-purple">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body-muted">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-sm font-medium text-brand-purple transition-colors hover:text-brand-teal"
                >
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
