const POSTS = [
  {
    image: 'https://picsum.photos/seed/stamp-blog1/400/250',
    category: 'Chemical Research',
    author: 'Michal',
    date: 'March 30, 2019',
    title: 'Subdue lesser beast winged road maid so bearing meat tree one',
    comments: 2,
    tags: 'Petrolium, Gas',
  },
  {
    image: 'https://picsum.photos/seed/stamp-blog2/400/250',
    category: 'Construction',
    author: 'Michal',
    date: 'March 30, 2019',
    title: 'You dominion signs good divide appear stars void heaven winged',
    comments: 2,
    tags: 'Petrolium, Gas',
  },
  {
    image: 'https://picsum.photos/seed/stamp-blog3/400/250',
    category: 'Engineering',
    author: 'Michal',
    date: 'March 30, 2019',
    title: 'First fowl winged of likeness be rule fish Day So that likeness have',
    comments: 2,
    tags: 'Petrolium, Gas',
  },
] as const

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-3xl font-semibold text-ink">Latest From Our Blog Page</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <article key={post.title} className="group">
              <div className="relative overflow-hidden rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 rounded bg-brand px-3 py-1 text-xs font-semibold uppercase text-white">
                  {post.category}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-mist">
                  <span className="font-medium text-ink">By {post.author}</span> / {post.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink leading-snug">
                  <a href="#" className="hover:text-brand transition-colors">
                    {post.title}
                  </a>
                </h3>
                <div className="mt-2 flex items-center gap-4 text-sm text-mist">
                  <span>{post.comments} Comments</span>
                  <span>{post.tags}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
