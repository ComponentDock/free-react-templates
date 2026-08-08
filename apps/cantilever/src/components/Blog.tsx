interface Post {
  title: string
  tag: string
  excerpt: string
  date: string
  seed: string
}

const posts: Post[] = [
  {
    title: 'Designing for Natural Light',
    tag: 'Architecture',
    excerpt:
      'How orientation, apertures, and interior finishes shape the way daylight moves through a home.',
    date: 'January 31, 2018',
    seed: 'cantilever-blog-1',
  },
  {
    title: 'Materials for Modern Living',
    tag: 'Interior',
    excerpt:
      'Concrete, timber, and stone — choosing honest materials that age gracefully and need little care.',
    date: 'January 31, 2018',
    seed: 'cantilever-blog-2',
  },
  {
    title: 'The Art of Space Planning',
    tag: 'Design',
    excerpt:
      'Circulation, proportion, and quiet zones: the thinking behind rooms that simply feel right.',
    date: 'January 31, 2018',
    seed: 'cantilever-blog-3',
  },
]

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold uppercase text-ink sm:text-3xl dark:text-white">
          Recent From Our Blog
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-mist dark:text-white/60">
          Notes on architecture, interiors, and the craft of building — from our studio to your
          inbox.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.seed} className="group overflow-hidden rounded shadow-lg">
              <a href="#blog" className="block overflow-hidden bg-charcoal">
                <img
                  src={`https://picsum.photos/seed/${post.seed}/640/400`}
                  alt={post.title}
                  className="aspect-[8/5] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="bg-paper p-6 dark:bg-gray-900">
                <span className="inline-block rounded bg-brand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-base font-bold uppercase leading-snug text-ink dark:text-white">
                  <a href="#blog" className="transition-colors hover:text-brand">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-white/60">
                  {post.excerpt}
                </p>
                <span className="mt-4 block text-xs font-medium uppercase text-mist dark:text-white/50">
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
